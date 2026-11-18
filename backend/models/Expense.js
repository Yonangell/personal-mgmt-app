const db = require("../config/db");

class Expense {
  // 1. Registrar un nuevo gasto asociado a una categoría administrada
  static async create({
    user_id,
    category_id,
    amount,
    description = null,
    expense_date,
  }) {
    const query = `
            INSERT INTO expenses (user_id, category_id, amount, description, expense_date) 
            VALUES (?, ?, ?, ?, ?)
        `;
    const [result] = await db.execute(query, [
      user_id,
      category_id,
      amount,
      description,
      expense_date,
    ]);
    return {
      id: result.insertId,
      user_id,
      category_id,
      amount,
      description,
      expense_date,
    };
  }

  // 2. Listar gastos del usuario incluyendo el nombre de la categoría (JOIN)
  static async findAllByUserId(userId) {
    const query = `
            SELECT e.*, c.name AS category_name 
            FROM expenses e
            JOIN categories c ON e.category_id = c.id
            WHERE e.user_id = ? 
            ORDER BY e.expense_date DESC, e.created_at DESC
        `;
    const [rows] = await db.execute(query, [userId]);
    return rows;
  }

  // 3. Buscar un gasto específico del usuario
  static async findById(id, userId) {
    const query = `
            SELECT e.*, c.name AS category_name 
            FROM expenses e
            JOIN categories c ON e.category_id = c.id
            WHERE e.id = ? AND e.user_id = ?
        `;
    const [rows] = await db.execute(query, [id, userId]);
    return rows[0] || null;
  }

  // 4. Actualizar gasto parcialmente con COALESCE
  static async update(
    id,
    userId,
    { category_id, amount, description, expense_date },
  ) {
    const query = `
            UPDATE expenses 
            SET category_id = COALESCE(?, category_id),
                amount = COALESCE(?, amount),
                description = COALESCE(?, description),
                expense_date = COALESCE(?, expense_date)
            WHERE id = ? AND user_id = ?
        `;
    const [result] = await db.execute(query, [
      category_id || null,
      amount || null,
      description || null,
      expense_date || null,
      id,
      userId,
    ]);
    return result.affectedRows > 0;
  }

  // 5. Eliminar gasto
  static async delete(id, userId) {
    const query = `DELETE FROM expenses WHERE id = ? AND user_id = ?`;
    const [result] = await db.execute(query, [id, userId]);
    return result.affectedRows > 0;
  }
}

module.exports = Expense;

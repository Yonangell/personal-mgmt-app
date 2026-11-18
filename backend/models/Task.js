const db = require("../config/db");

class Task {
  // 1. Crear una nueva tarea
  static async create({
    user_id,
    title,
    description = null,
    status = "pending",
    due_date = null,
  }) {
    const query = `
            INSERT INTO tasks (user_id, title, description, status, due_date) 
            VALUES (?, ?, ?, ?, ?)
        `;
    const [result] = await db.execute(query, [
      user_id,
      title,
      description,
      status,
      due_date,
    ]);
    return {
      id: result.insertId,
      user_id,
      title,
      description,
      status,
      due_date,
    };
  }

  // 2. Listar todas las tareas del usuario
  static async findAllByUserId(userId) {
    const query = `
            SELECT * FROM tasks 
            WHERE user_id = ? 
            ORDER BY created_at DESC
        `;
    const [rows] = await db.execute(query, [userId]);
    return rows;
  }

  // 3. Buscar una tarea específica del usuario
  static async findById(id, userId) {
    const query = `SELECT * FROM tasks WHERE id = ? AND user_id = ?`;
    const [rows] = await db.execute(query, [id, userId]);
    return rows[0] || null;
  }

  // 4. Actualización parcial con COALESCE
  static async update(id, userId, { title, description, status, due_date }) {
    const query = `
            UPDATE tasks 
            SET title = COALESCE(?, title),
                description = COALESCE(?, description),
                status = COALESCE(?, status),
                due_date = COALESCE(?, due_date)
            WHERE id = ? AND user_id = ?
        `;
    const [result] = await db.execute(query, [
      title || null,
      description || null,
      status || null,
      due_date || null,
      id,
      userId,
    ]);
    return result.affectedRows > 0;
  }

  // 5. Eliminar tarea
  static async delete(id, userId) {
    const query = `DELETE FROM tasks WHERE id = ? AND user_id = ?`;
    const [result] = await db.execute(query, [id, userId]);
    return result.affectedRows > 0;
  }

  // 6. Contar tareas del usuario (Vital para validar max_tasks en el Policy Engine)
  static async countByUserId(userId) {
    const query = `SELECT COUNT(*) as total FROM tasks WHERE user_id = ?`;
    const [rows] = await db.execute(query, [userId]);
    return rows[0].total;
  }
}

module.exports = Task;

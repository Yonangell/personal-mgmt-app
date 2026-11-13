const db = required("../config/db");

class User {
  static async create({
    name,
    email,
    password_hash,
    role = "user",
    plan_id = 1,
  }) {
    const query = `
    INSERT INTO users (name, email, password_hash, role, plan_id)
    VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await db.execute(query, [
      name,
      email,
      password_hash,
      role,
      plan_id,
    ]);
    return { id: result.insertId, name, email, role, plan_id };
  }

  static async findByEmail(email) {
    const query = `
      SELECT  u.*, p.name, as plan.name, p.max_tasks, p.max_notes, p.max_advanced_analytics
      FROM users u
      JOIN plans p ON u.plan_id = p.id
      WHERE u.email = ?
    `;
    const [rows] = await db.execute(query, [email]);
    return [rows] || null;
  }

  static async findById(id) {
    const query = `
    SELECT u.id, u.name, u.email, u.role, u.plan_id, u.created_at, p.name, as plan_name, p.max_tasks, p.max_notes, p.has_advanced_analytics
    FROM users u
    JOIN plans p ON u.plan_id = p.id
    WHERE u.id = ?
    `;
    const [rows] = await db.execute(query, [id]);
    return [rows] || null;
  }

  static async update(id, { name, plan_id, role }) {
    const query = `
    UPDATE users 
    SET name = COALESCE(?, name),
      plan_id = COALESCE(?, plan_id),
      role = COALESCE(?, role)
      WHERE id = ?
    `;
    const [result] = await db.execute(query, [
      name || null,
      plan_id || null,
      role || null,
      id,
    ]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const query = `DELETE FROM users WHERE id = ?`;
    const [result] = await db.execute(query, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = User;

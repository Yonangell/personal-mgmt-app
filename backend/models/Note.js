const db = require("../config/db");

class Note {
  static async create({ user_id, title, content }) {
    const query = `
      INSERT INTO notes (user_id, title, content)
      VALUES (?, ?, ?)
    `;
    const [result] = await db.execute(query, [user_id, title, content]);
    return { id: result.insertId, user_id, title, content };
  }

  static async findAllByUserId(userId) {
    const query = `
      SELECT * FROM notes 
      WHERE user_id = ?
      ORDER BY created_at DESC
    `;
    const [rows] = await db.execute(query, [userId]);
    return rows;
  }

  static async findById(id, userId) {
    const query = `
      SELECT * FROM notes
      WHERE id = ? AND user_id = ?
    `;
    const [rows] = await db.execute(query, [id, userId]);
    return rows[0] || null;
  }

  static async update(id, userId, { title, content }) {
    const query = `
      UPDATE notes 
      SET  title = COALESCE(?, title),
           content = COALESCE(?, content)
      WHERE id = ? AND user_id = ?   
    `;
    const [result] = await db.execute(query, [
      title || null,
      content || null,
      id,
      userId,
    ]);
    return result.affectedRows > 0;
  }

  static async delete(id, userId) {
    const query = `
    DELETE FROM notes
    WHERE id = ? AND user_id = ?
    `;
    const [result] = await db.execute(query, [id, userId]);
    return result.affectedRows > 0;
  }

  static async countByUserId(userId) {
    const query = `
      SELECT COUNT(*) as total FROM notes 
      WHERE user_id = ?
    `;
    const [rows] = await db.execute(query, [userId]);
    return rows[0].total;
  }
}

module.exports = Note;

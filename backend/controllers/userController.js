// controllers/userController.js
const db = require('../db');

// Lấy tất cả users
exports.getAllUsers = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

// Lấy user theo ID
exports.getUserById = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'User not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

// Tạo mới user
exports.createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    res.status(201).json({ id: result.insertId, name, email });
  } catch (err) {
    next(err);
  }
};

// Cập nhật user
exports.updateUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, req.params.id]);
    res.json({ id: req.params.id, name, email });
  } catch (err) {
    next(err);
  }
};

// Xóa user
exports.deleteUser = async (req, res, next) => {
  try {
    await db.query('DELETE FROM users WHERE id = ?', [req.params.id]);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

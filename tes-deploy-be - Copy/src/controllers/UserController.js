import pool from "../config/db.js";

export const storeUser = async (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Nama tidak boleh kosong!" });
  }

  try {
    const [result] = await pool.query("INSERT INTO users (name) VALUES (?)", [
      name,
    ]);
    res.status(201).json({
      message: "Nama berhasil disimpan",
      data: { id: result.insertId, name },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

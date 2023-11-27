import express from "express";
import db from "../db.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { username, password, email } = req.body;

  // Egyszerű ellenőrzés: minden adat megvan-e
  if (!username || !password || !email) {
    return res.status(400).json({ message: "Minden mezőt ki kell tölteni!" });
  }

  // Regisztráció a MySQL adatbázisban
  const query = "INSERT INTO felhasznalok (nev, jelszo, email) VALUES (?, ?, ?)";
  db.query(query, [username, password, email], (err, result) => {
    if (err) {
      console.error("Hiba a regisztráció során:", err);
      return res.status(500).json({ message: "Hiba a regisztráció során" });
    }

    return res.status(200).json({ message: "Sikeres regisztráció" });
  });
});

export default router;
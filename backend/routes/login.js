import express from "express";
import db from "../db.js";
import e from "express";

const router = express.Router();

router.post("/", (req, res) => {
    const{username, password} = req.body;
    if(!username || !password){
        return res.status(500).json({message: "Minden mezőt ki kell tölteni!"});
    }

    const query = "SELECT * FROM felhasznalok WHERE nev = ? AND jelszo = ?";
    db.query(query, [username, password], (err, result) => {
        if(err){
            console.error("Hiba a bejelentkezés során:", err);
            return res.status(500).json({message: "Hiba a bejelentkezés során"});
        }
        if(result.length > 0){
            return res.status(200).json({message: "Sikeres bejelentkezés"});
        }else{
            return res.status(401).json({message: "Hibás felhasználónév vagy jelszó"});
        }
    });
});

export default router;
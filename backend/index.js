import express from "express";
import cors from "cors";
import sql from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/education", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM education`;
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching education");
  }
});

// dst...

export default app; // ini penting buat Vercel

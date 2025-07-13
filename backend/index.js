import express from "express";
import cors from "cors";
import sql from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Route: /api/education
app.get("/api/education", async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM education');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching education");
  }
});

// ✅ Route: /api/projects
app.get("/api/projects", async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM projects');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching projects");
  }
});

// ✅ Route: /api/skills
app.get("/api/skills", async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM skills');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching skills");
  }
});

export default app; // penting untuk vercel

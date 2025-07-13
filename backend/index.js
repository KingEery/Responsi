// backend/index.js
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

app.get("/api/skills", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM skills`;
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching skills");
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM projects`;
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching projects");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});

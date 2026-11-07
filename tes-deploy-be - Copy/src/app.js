import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"; // pastikan jalurnya benar

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes); // Pastikan userRoutes bukan undefined

export default app;

import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/auth", authRoutes);
app.use("/movies", movieRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base de données OK");
    await sequelize.sync();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  } catch (error) {
    console.error("Erreur de connexion à la base de données:", error);
  }
};

startServer();

app.get("/", (req, res) => {
  res.send("API REST démarrée");
});

export default app;

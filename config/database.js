import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_USER_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion réussie à la base de données");
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données :", err);
  });

sequelize
  .sync({ force: false, alter: true })
  .then(() => {
    console.log("Les modèles ont été synchronisés avec la base de données.");
  })
  .catch((err) => {
    console.error("Erreur lors de la synchronisation des modèles :", err);
  });

export default sequelize;

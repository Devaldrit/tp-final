# Lancer le projet

## Prérequis

- Node.js installé (version 14 ou supérieure)
- npm installé (version 6 ou supérieure)

## Étapes

1. **Cloner le dépôt**

   ```bash
   git clone <URL_DU_DEPOT>
   cd <NOM_DU_DEPOT>
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**

   - Créez un fichier `.env` à la racine du projet
   - Ajoutez les variables nécessaires (exemple ci-dessous)

     ```
       PORT=
       DB_NAME=
       DB_USER=
       DB_USER_PASSWORD=
       DB_HOST=
       JWT_SECRET=

     ```

4. **Lancer le serveur**

   ```bash
   npm start
   ```

5. **Accéder à l'application**
   - Ouvrez votre navigateur et allez à `http://localhost:3000` (3000 correspondra à PORT= dans le .env)

## Dépendances nécessaires :

• express, sequelize, pg, nodemon
• dotenv pour la gestion des variables d’environnement
• bcrypt pour le hachage des mots de passe
• jsonwebtoken pour la gestion des tokens JWT
• multer pour l’upload d’images
Configurez Sequelize pour se connecter à une base de données PostgreSQL.

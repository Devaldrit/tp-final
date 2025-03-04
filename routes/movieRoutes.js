import express from "express";
import auth from "../middleware/auth.js";
import upload from "../middleware/multerConfig.js";
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieCotroller.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovie);
router.post("/", auth, upload.single("image"), createMovie);
router.put("/:id", auth, upload.single("image"), updateMovie);
router.delete("/:id", auth, deleteMovie);

export default router;

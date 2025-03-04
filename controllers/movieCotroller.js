import {
  getAllMovies,
  getMovieById,
  addMovie,
  editMovie,
  removeMovie,
} from "../services/movieService.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovie = async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);
    res.json(movie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMovie = async (req, res) => {
  const { title, description, releaseDate } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  try {
    const movie = await addMovie(
      { title, description, releaseDate, imageUrl },
      req.user.id
    );
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  const { title, description, releaseDate } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;
  try {
    const movie = await editMovie(
      req.params.id,
      { title, description, releaseDate, imageUrl },
      req.user.id
    );
    res.json(movie);
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await removeMovie(req.params.id, req.user.id);
    res.json({ message: "Film supprimé" });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

import {
  findAllMovies,
  findMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../repositories/movieRepository.js";

export const getAllMovies = async () => {
  return await findAllMovies();
};

export const getMovieById = async (id) => {
  const movie = await findMovieById(id);
  if (!movie) {
    throw new Error("Film non trouvé");
  }
  return movie;
};

export const addMovie = async (movieData, userId) => {
  return await createMovie({ ...movieData, userId });
};

export const editMovie = async (id, movieData, userId) => {
  const movie = await findMovieById(id);
  if (!movie) {
    throw new Error("Film non trouvé");
  }
  if (movie.userId !== userId) {
    throw new Error("Non autorisé");
  }
  return await updateMovie(id, movieData);
};

export const removeMovie = async (id, userId) => {
  const movie = await findMovieById(id);
  if (!movie) {
    throw new Error("Film non trouvé");
  }
  if (movie.userId !== userId) {
    throw new Error("Non autorisé");
  }
  return await deleteMovie(id);
};

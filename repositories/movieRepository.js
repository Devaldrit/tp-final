import Movie from "../models/movie.model.js";

export const findAllMovies = async () => {
  return await Movie.findAll();
};

export const findMovieById = async (id) => {
  return await Movie.findByPk(id);
};

export const createMovie = async (movieData) => {
  return await Movie.create(movieData);
};

export const updateMovie = async (id, movieData) => {
  const movie = await Movie.findByPk(id);
  if (movie) {
    return await movie.update(movieData);
  }
  return null;
};

export const deleteMovie = async (id) => {
  const movie = await Movie.findByPk(id);
  if (movie) {
    await movie.destroy();
    return true;
  }
  return false;
};

//const API_KEY = "62c6a9d191e328cb5ff5ea4f78562f74";
import { environment } from 'src/environments/environment';

const requests = {
  fetchTrending: `
  ${environment.BASE_URL}/trending/all/week?api_key=${environment.API_KEY}&language=en-US`,
  fetchNetflixOriginals: `
  ${environment.BASE_URL}/discover/tv?api_key=${environment.API_KEY}&with_networks=213`,
  fetchTopRated: `
  ${environment.BASE_URL}/movie/top_rated?api_key=${environment.API_KEY}&language=en-US`,
  fetchTopRatedTvShow: `
  ${environment.BASE_URL}/tv/top_rated?api_key=${environment.API_KEY}&language=en-US`,

  fetchActionMovies: `
  ${environment.BASE_URL}/discover/movie?api_key=${environment.API_KEY}&with_genres=28`,
  fetchComedyMovies: `
  ${environment.BASE_URL}/discover/movie?api_key=${environment.API_KEY}&with_genres=35`,
  fetchHorrorMovies: `
  ${environment.BASE_URL}/discover/movie?api_key=${environment.API_KEY}&with_genres=27`,
  fetchRomanceMovies: `
  ${environment.BASE_URL}/discover/movie?api_key=${environment.API_KEY}&with_genres=10749`,
  fetchDocumentariesMovies: `
  ${environment.BASE_URL}/discover/movie?api_key=${environment.API_KEY}&with_genres=99`,
};

export default requests;

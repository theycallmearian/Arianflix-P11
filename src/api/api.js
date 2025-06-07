const BASE_URL = 'https://www.omdbapi.com/'
const API_KEY = process.env.REACT_APP_OMDB_API_KEY

export async function fetchMovieList(searchTerm = 'Marvel', page = 1) {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(
    searchTerm
  )}&page=${page}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Error al obtener lista de películas')
  const data = await res.json()
  if (data.Response === 'False') throw new Error(data.Error)
  return data.Search
}

export async function fetchMovieDetail(imdbID) {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Error al obtener detalle de la película')
  const data = await res.json()
  if (data.Response === 'False') throw new Error(data.Error)
  return data
}

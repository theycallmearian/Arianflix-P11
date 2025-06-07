import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchMovieList } from '../../api/api'
import Card from '../common/Card'
import Loader from '../common/Loader'
import '../../assets/styles/Home.css'

const suggestedWords = [
  '  Busca aquí lo que quieras...',
  ' Star Wars',
  ' Marvel',
  ' Goonies',
  ' Grease',
  ' Hunguer Games',
  ' ¿Necesitas inspiración?',
  ' Adam Sandler',
  ' Pixar',
  ' Disney',
  ' Lord Of The Rings'
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [movies, setMovies] = useState([])

  const [topRated, setTopRated] = useState([])
  const [comedy, setComedy] = useState([])
  const [action, setAction] = useState([])

  const inputRef = useRef(null)

  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [placeholderText, setPlaceholderText] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    let charIndex = 0
    let timeoutId

    function type() {
      const word = suggestedWords[currentWordIndex]
      if (charIndex < word.length) {
        setPlaceholderText((prev) => prev + word.charAt(charIndex))
        charIndex++
        timeoutId = setTimeout(type, 70)
      } else {
        timeoutId = setTimeout(backspace, 2000)
      }
    }

    function backspace() {
      const word = suggestedWords[currentWordIndex]
      if (charIndex >= 0) {
        setPlaceholderText(word.slice(0, charIndex))
        charIndex--
        timeoutId = setTimeout(backspace, 70)
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % suggestedWords.length)
      }
    }

    type()

    return () => clearTimeout(timeoutId)
  }, [currentWordIndex])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const [ratedData, comedyData, actionData] = await Promise.all([
          fetchMovieList('Avengers'),
          fetchMovieList('Comedy'),
          fetchMovieList('Action')
        ])
        setTopRated(ratedData)
        setComedy(comedyData)
        setAction(actionData)
      } catch (err) {}
    }
    fetchCategories()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!searchTerm) return
    try {
      setLoading(true)
      setError(null)
      const data = await fetchMovieList(searchTerm, 1)
      setMovies(data)
    } catch (err) {
      setError(err.message)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='home-container'>
      <div className='home-header'>
        <img
          src='https://res.cloudinary.com/dye4qdrys/image/upload/v1749238378/arianflixbf_iwcuty.png'
          alt='Arianflix'
          className='home-logo'
        />
        <p className='home-description'>
          {' '}
          No somos Netlix, pero tenemos todo el cine del mundo
        </p>
      </div>

      <form className='search-form' onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type='text'
          placeholder={placeholderText}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-input'
        />
        <button type='submit' className='search-button'>
          Buscar
        </button>
      </form>

      {loading && <Loader />}

      {error && <p className='error text-center'>Error: {error}</p>}

      {movies.length > 0 && !loading && !error && (
        <section className='row-container'>
          <h3 className='row-title'>Resultados de “{searchTerm}”</h3>
          <div className='row-slider'>
            {movies.map((movie) => (
              <Card
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                onClick={() => navigate(`/movie/${movie.imdbID}`)}
              />
            ))}
          </div>
        </section>
      )}

      {!loading && !error && movies.length === 0 && searchTerm && (
        <p className='no-results text-center'>
          ☹️ No hemos encontrado ningún resultado... ☹️
        </p>
      )}

      <section className='row-container'>
        <h3 className='row-title'>Top Valoradas</h3>
        <div className='row-slider'>
          {topRated.map((movie) => (
            <Card
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              onClick={() => navigate(`/movie/${movie.imdbID}`)}
            />
          ))}
        </div>
      </section>

      <section className='row-container'>
        <h3 className='row-title'>Top Comedia</h3>
        <div className='row-slider'>
          {comedy.map((movie) => (
            <Card
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              onClick={() => navigate(`/movie/${movie.imdbID}`)}
            />
          ))}
        </div>
      </section>

      <section className='row-container'>
        <h3 className='row-title'>Top Acción</h3>
        <div className='row-slider'>
          {action.map((movie) => (
            <Card
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              onClick={() => navigate(`/movie/${movie.imdbID}`)}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

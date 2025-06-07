import React from 'react'
import '../../assets/styles/About.css'

export default function About() {
  return (
    <main className='about-container'>
      <h2>Acerca de Arianflix</h2>
      <p>
        Arianflix es un proyecto de práctica en React.Permite buscar películas
        usando la API de OMDb y visualizar sus detalles.
      </p>
      <p>
        Utiliza React Hooks (useState, useEffect), React Router para la
        navegación y un diseño responsive que se adapta a cualquier dispositivo.
      </p>
      <p>
        Autor:{' '}
        <a
          class='specialanchor'
          href='https://ariancastroportfolio.netlify.app/'
        >
          Arian Castro
        </a>{' '}
        | Junio 2025
      </p>
      <img
        src='https://res.cloudinary.com/dye4qdrys/image/upload/v1749238378/arianflixbf_iwcuty.png'
        alt='Arianflix'
        className='home-logo'
      />
    </main>
  )
}

import React from 'react';
import Navbar from './Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Aspirantes from './pages/Aspirantes.js'; // Importa la nueva página

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0,0,0,0)', // AL FIN LOGRÉ QUE SE HAGA TRANSPARENTE XD
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar/>

          <section className='banner'>
            <h1>CECyTEM Xonacatlán</h1>
          </section>

          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <section id="home">
                    <h1>SE PARTE DE LA EXPERIENCIA CECyTEM</h1>
                    <p>Esto va a quedar bien shidooooo xd.</p>
                  </section>

                  <section id="about">
                    <h2>About Us</h2>
                    <div className="video-grid">
                      <iframe className="video" src="https://www.youtube.com/embed/EB7uQkNY39A?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      <iframe className="video" src="https://www.youtube.com/embed/t71N7YomBjA?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      <iframe className="video" src="https://www.youtube.com/embed/FLXWhXLgFvw?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                  </section>

                  <section id="services">
                    <h2>¡Somos tu mejor opción!</h2>
                  </section>

                  <section id="contact">
                    {/* Contenido de la sección de contacto */}
                  </section>
                </>
              } />
              <Route path="/aspirantes" element={<Aspirantes />} />
            </Routes>
          </main>

          <br></br>
          <br></br>
          <footer>
            <div className="social-icons">
              <a href="https://www.facebook.com/CecytemPlantelXonacatlan1" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://x.com/CecytemXonacat" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} />
              </a>
              <a href="https://www.youtube.com/@cecytemplantelxonacatlan5164" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} />
              </a>
            </div>
            <p>&copy; 2024 CECyTEM Xonacatlán.</p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

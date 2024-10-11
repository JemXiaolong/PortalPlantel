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
          <Navbar /> {/* El menú estará en todas las páginas */}
          <main>
            <Routes>
              {/* Ruta principal "/" donde se muestra todo el contenido adicional */}
              <Route
                path="/"
                element={
                  <>
                    <section className="banner">
                      <h1>CECyTEM Xonacatlán</h1>
                    </section>

                    <section id="home">
                      <br></br>
                      <h1>SE PARTE DE LA EXPERIENCIA CECyTEM</h1>
                    </section>

                    <br></br>

                    <section id="about">
                      
                      <div className="video-grid-1">
                      
                        <iframe
                          className="video"
                          src="https://www.youtube.com/embed/EB7uQkNY39A?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>

                        <iframe
                          className="video"
                          src="https://www.youtube.com/embed/t71N7YomBjA?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=2"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>

                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>

                      <div className="video-grid-2">
                      <iframe
                          className="video2"
                          src="https://www.youtube.com/embed/FLXWhXLgFvw?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>

                    </section>

                    <section id="services">
                      <h2>¡Somos tu mejor opción!</h2>
                    </section>
                  </>
                }
              />

              {/* Ruta específica para aspirantes */}
              <Route path="/aspirantes" element={<Aspirantes />} />
            </Routes>
          </main>
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

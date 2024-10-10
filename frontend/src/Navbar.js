import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from './cecyto.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); //UMBRAL del shido ajsjsjs
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box className="navbar-container">
      <AppBar id='barra'
        position="fixed"
        elevation={8}
        className={`navbar ${scrolling ? 'scrolled' : ''}`}
      >
        <Toolbar className="toolbar">
          <IconButton
            className="menu-button"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Avatar alt="Logo" src={logo} className="logo" sx={{ flexGrow: 0 }} />
          <Typography variant="p" component="div" className="title" sx={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
            CECyTEM Xonacatlán
          </Typography>
          <Box className={`nav-links ${menuOpen ? 'active' : ''}`} sx={{ flexGrow: 1 }}>
            <Button id='b1' component={Link} to="/">Inicio</Button>
            <Button id='b2' component={Link} to="/aspirantes">Aspirantes</Button>
            <Button id='b3' component={Link} to="#alumnos">Alumnos</Button>
            <Button id='b4' component={Link} to="#administrativos">Administrativos</Button>
            <Button id='b5' component={Link} to="#docentes">Docentes</Button>
            <Button id='b6' component={Link} to="#egresados">Egresados</Button>
            <Button id='b7' component={Link} to="#oferta-educativa">Oferta Educativa</Button>
            <Button id='b8' component={Link} to="#publico-general">Público en General</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <br />
    </Box>
  );
};

export default Navbar;

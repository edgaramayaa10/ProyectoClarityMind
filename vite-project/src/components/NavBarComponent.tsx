import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import claritymindLogo from './IMG/Estudio_de_Yoga__2_-removebg-preview.png';
import { Link } from 'react-router-dom';
import SearchInput from './Search/SearchInput';
import SearchComponent from './Search/SearchComponent';

const pages = ['Meditacion Guiada'];
const pages1 = ['Control diario'];
const settings = ['Perfil', 'Cerrar sesion'];

function NavBarComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false); // Estado para el diálogo de cierre de sesión
  const navigate = useNavigate(); // Usar useNavigate para redirección

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Redirigir a la página de resultados de búsqueda con la consulta
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleMenuItemClick = (setting: string) => {
    handleCloseUserMenu(); // Cierra el menú
    switch (setting) {
      case 'Perfil':
        navigate('/Perfil');
        break;
      case 'Cerrar sesion':
        handleOpenLogoutDialog(); // Mostrar el diálogo de confirmación
        break;
      default:
        break;
    }
  };

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleConfirmLogout = () => {
    // Aquí deberías manejar la lógica de cierre de sesión
    handleCloseLogoutDialog();
    navigate('/login'); // Redirige al login después de cerrar sesión
  };

  return (
    <AppBar position="fixed" sx={{ width: '100%', background: 'white', color: '#D49F11', height: '100px', borderBottom: '1px solid gray' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Link to="/">
            <Box component="img" src={claritymindLogo} alt="ClarityMind Logo" sx={{ height: '100px', mr: 2 }} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CLARITYMIND
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CLARITYMIND
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', marginLeft: '100px' }}>
            <Link to="/meditacion">
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#045346', display: 'block', fontWeight: 'bolder' }}
                >
                  {page}
                </Button>
              ))}
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', marginLeft: '100px' }}>
            <Link to="/control">
              {pages1.map((page1) => (
                <Button
                  key={page1}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#045346', display: 'block', fontWeight: 'bolder' }}
                >
                  {page1}
                </Button>
              ))}
            </Link>
          </Box>

          <Box sx={{ flexGrow: 3, display: 'flex', justifyContent: 'center' }}>
            <SearchComponent /> {/* Añadir el componente de búsqueda */}
          </Box>

          <Box sx={{ flexGrow: 0.02, color: '#045346', backgroundColor: '#FCD961', borderRadius: '6px', marginRight: '20px' }}>
            <Button color='inherit'><Link to="/login">Login</Link></Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Diálogo de Confirmación de Cierre de Sesión */}
      <Dialog
        open={openLogoutDialog}
        onClose={handleCloseLogoutDialog}
      >
        <DialogTitle>Confirmación</DialogTitle>
        <DialogContent>
          <Typography>¿Estás seguro que quieres cerrar sesión?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogoutDialog}>No</Button>
          <Button onClick={handleConfirmLogout} color="primary">Sí</Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default NavBarComponent;

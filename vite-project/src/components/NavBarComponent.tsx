import * as React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import claritymindLogo from './IMG/Estudio_de_Yoga__2_-removebg-preview.png';
import SearchComponent from './Search/SearchComponent';

const pages = ['Meditación Guiada'];
const pages1 = ['Control Diario'];
const settings = ['Perfil', 'Grafica', 'Cerrar sesión'];

function NavBarComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    setShowLogin(location.pathname !== '/login' && !isAuthenticated);
  }, [location.pathname]);

  React.useEffect(() => {
    const handleStorageChange = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      setShowLogin(location.pathname !== '/login' && !isAuthenticated);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [location.pathname]);

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
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleMenuItemClick = (setting: string) => {
    handleCloseUserMenu();
    switch (setting) {
      case 'Perfil':
        navigate('/Perfil');
        break;
      case 'Grafica':
        navigate('/grafica');
        break;
      case 'Cerrar sesión':
        handleOpenLogoutDialog();
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
    localStorage.removeItem('isAuthenticated');
    handleCloseLogoutDialog();
    navigate('/login');
    setShowLogin(true);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        width: '100%', 
        background: 'white', 
        color: '#D49F11', 
        height: '100px', 
        borderBottom: '1px solid gray',
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        boxShadow: 'none',
        zIndex: 1300
      }}
    >
      <Toolbar 
        disableGutters 
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          width: '100%',
          paddingLeft: '0', 
          paddingRight: '0', 
        }}
      >
        {/* Logo y Nombre alineados a la izquierda */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml: 4 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Box component="img" src={claritymindLogo} alt="ClarityMind Logo" sx={{ height: '100px', mr: 2 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                marginRight:'40px'
              }}
            >
              CLARITYMIND
            </Typography>
          </Link>
        </Box>

        {/* Menú de Navegación (Movil) */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton
            size="large"
            aria-label="menu"
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
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Menú de Navegación (Desktop) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', ml: 'auto', mr: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', mr: 4 }}>
            <Link to="/meditacion" style={{ textDecoration: 'none' }}>
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

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/control" style={{ textDecoration: 'none' }}>
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
        </Box>

        {/* Barra de Búsqueda */}
        <Box sx={{ flexGrow: 4, marginLeft: '150px' }}>
          <SearchComponent />
        </Box>

        {/* Botón de Login */}
        {showLogin && (
          <Box sx={{ flexGrow: 0.02, color: '#045346', backgroundColor: '#FCD961', borderRadius: '6px', marginRight: '40px' }}>
            <Button color='inherit'>
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
            </Button>
          </Box>
        )}

        {/* Menú de Usuario */}
        <Box sx={{ flexGrow: 0, marginRight: '40px' }}>
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

      {/* Diálogo de Confirmación de Cierre de Sesión */}
      <Dialog open={openLogoutDialog} onClose={handleCloseLogoutDialog}>
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

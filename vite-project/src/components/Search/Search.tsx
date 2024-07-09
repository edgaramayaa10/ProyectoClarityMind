
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#E0A75E', // Cambiar a color vino
    color: '#26355D', // Cambiar a color rojo clarito
    '&:hover': {
        backgroundColor: alpha('#F9D689', 0.75), // Ajustar la opacidad en hover si es necesario
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 'calc(1em + ${theme.spacing(4)})',
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '25ch',
            '&:focus': {
                width: '25ch',
            },
        },
        '&::placeholder': {
            textAlign: 'center',  // Centrar el texto del placeholder
            marginLeft: theme.spacing(2),  // Ajustar margen izquierdo del placeholder
        },
    },
}));

export default function SearchInput() {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
}
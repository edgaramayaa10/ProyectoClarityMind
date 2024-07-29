// src/components/SearchInput.tsx
import * as React from 'react';
import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

interface SearchInputProps {
    onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
    const [query, setQuery] = React.useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: '#D49F11' }} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                value={query}
                onChange={handleInputChange}
                variant="outlined"
                InputProps={{
                    disableUnderline: true,
                }}
                sx={{ width: '95%' }} // Ajustar el ancho aquí
            />
        </Box>
    );
}

const SearchIconWrapper = (props: any) => (
    <div style={{
        padding: '10px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    }}>
        {props.children}
    </div>
);

const StyledInputBase = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        backgroundColor: '#FBF7F0',
        borderRadius: theme.shape.borderRadius,
        height: '40px', // Ajustar la altura aquí
        '& fieldset': {
            border: `2px solid #D49F11`, // Borde del color mostaza y un poco más grueso
        },
        '&:hover fieldset': {
            border: `2px solid #9E7A0C`, // Borde más oscuro en hover
        },
        '&.Mui-focused fieldset': {
            border: `2px solid #9E7A0C`, // Borde más oscuro cuando está enfocado
        },
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: '45ch', // Hacer la barra de búsqueda ligeramente más corta
    },
}));

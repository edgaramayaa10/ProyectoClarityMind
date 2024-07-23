// SearchInput.tsx
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FBF7F0', // Cambiar a color vino
    color: 'black', // Cambiar a color rojo clarito
    '&:hover': {
        backgroundColor: alpha('#FBF7F0', 0.75), // Ajustar la opacidad en hover si es necesario
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
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '25ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}));

interface SearchInputProps {
    onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
    const [query, setQuery] = React.useState<string>('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
            setQuery(''); // Clear the input after search
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <IconButton
                onClick={handleSearch}
                sx={{ position: 'absolute', right: 0, height: '100%', color: 'black' }}
            >
                <SearchIcon />
            </IconButton>
        </Search>
    );
}

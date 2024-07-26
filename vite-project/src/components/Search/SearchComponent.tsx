// src/components/SearchComponent.tsx
import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import SearchResultList from './SearchResultList';
import searchService from '../Services/SearchServices';
import { Box } from '@mui/material';

const SearchComponent: React.FC = () => {
    const [results, setResults] = useState<any[]>([]);
    const [query, setQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [showDropdown, setShowDropdown] = useState<boolean>(false); // Estado para controlar la visibilidad del dropdown

    const handleSearch = async (searchQuery: string) => {
        setLoading(true);
        setError(null);
        setQuery(searchQuery);
        setShowDropdown(true); // Mostrar el dropdown cuando se realiza una búsqueda
        try {
            const data = await searchService.search(searchQuery);
            setResults(data);
        } catch (err) {
            setError('Error al obtener resultados');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (searchQuery: string) => {
        setQuery(searchQuery);
        setShowDropdown(searchQuery.trim() !== ''); // Mostrar el dropdown mientras se escribe
        if (searchQuery.trim() === '') {
            setResults([]); // Limpiar resultados si la consulta está vacía
        } else {
            handleSearch(searchQuery);
        }
    };

    // Ocultar el dropdown si el usuario hace clic fuera de la barra de búsqueda
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.search-container')) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }} className="search-container">
            <SearchInput onSearch={handleInputChange} />
            {showDropdown && (
                <Box sx={{ position: 'absolute', top: '100%', left: 0, width: '100%', zIndex: 10 }}>
                    <SearchResultList results={results} query={query} loading={loading} error={error} />
                </Box>
            )}
        </Box>
    );
};

export default SearchComponent;

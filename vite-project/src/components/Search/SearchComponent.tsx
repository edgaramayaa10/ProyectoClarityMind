// src/components/SearchComponent.tsx
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchResultList from './SearchResultList';
import searchService  from '../Services/SearchServices';
import { Box } from '@mui/material';


const SearchComponent: React.FC = () => {
    const [results, setResults] = useState<any[]>([]);
    const [query, setQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (searchQuery: string) => {
        setLoading(true);
        setError(null);
        setQuery(searchQuery);
        try {
            const data = await searchService.search(searchQuery);
            setResults(data);
        } catch (err) {
            setError('Error al obtener resultados');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ p: 2 }}>
            <SearchInput onSearch={handleSearch} />
            <SearchResultList results={results} query={query} loading={loading} error={error} />
        </Box>
    );
};

export default SearchComponent;

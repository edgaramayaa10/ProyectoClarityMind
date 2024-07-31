// src/components/SearchResultList.tsx
import React from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

interface SearchResultListProps {
    results: any[];
    query: string;
    loading: boolean;
    error: string | null;
}

const SearchResultList: React.FC<SearchResultListProps> = ({ results, query, loading, error }) => {
    return (
        <Box sx={{ position: 'absolute', width: '100%', mt: 1, zIndex: 1, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
            {loading && <Typography variant="body1" sx={{ marginLeft: 2 }}>Loading...</Typography>}
            {error && <Typography color="error" sx={{ marginLeft: 2 }}>{error}</Typography>}
            {!loading && !error && (
                <List>
                    {results.length > 0 ? (
                        results.map((result, index) => (
                            <ListItem key={index} component="a" href={result.url}>
                                <ListItemText primary={result.title} secondary={result.description} />
                            </ListItem>
                        ))
                    ) : (
                        <Typography sx={{ p: 2, marginLeft: 2 }}>No se encontraron resultados.</Typography>
                    )}
                </List>
            )}
        </Box>
    );
};

export default SearchResultList;

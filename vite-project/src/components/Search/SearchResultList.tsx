// src/components/SearchResultList.tsx
import React from 'react';
import { List, ListItem, ListItemText, Typography, Link } from '@mui/material';

interface SearchResultListProps {
    results: any[];
    query: string;
    loading: boolean;
    error: string | null;
}

const SearchResultList: React.FC<SearchResultListProps> = ({ results, query, loading, error }) => {
    return (
        <div>
            {loading && <Typography variant="body1">Loading...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
            {!loading && !error && (
                <List>
                    {results.length > 0 ? (
                        results.map((result, index) => (
                            <ListItem key={index} component={Link} href={result.url}>
                                <ListItemText primary={result.title} secondary={result.description} />
                            </ListItem>
                        ))
                    ) : (
                        query && <Typography>No se encontraron resultados.</Typography>
                    )}
                </List>
            )}
        </div>
    );
};

export default SearchResultList;

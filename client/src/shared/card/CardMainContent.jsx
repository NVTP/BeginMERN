﻿import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function CardMainContent ({ children }) {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{
                    bgcolor: '#fff',
                    border: '1px solid #0000001f',
                    padding: '5%'
                }}>
                    {children}
                </Box>
            </Container>
        </>
    );
};

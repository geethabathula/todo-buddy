import React from 'react'
import { createTheme } from '@mui/material/styles';
import "./App.css";
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createTheme({
    // typography: {
    //     fontFamily: [
    //         'Sedgwick Ave Display',
    //         'cursive',
    //     ].join(','),
    // },
});

function App1() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Footer />
        </ThemeProvider>
    )
}

export default App1

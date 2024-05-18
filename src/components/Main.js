import React from 'react'
import "../components/Main.css";
import { Box, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
const StyledGridItem = styled(Grid)(({ theme }) => ({

    margin: "1rem",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    height: "20rem",

    width: {
        xs: '100%', // Full width on extra-small screens
        sm: '100%', // Full width on small screens
        md: '70%',  // Half width on medium screens and above
    },
    borderRadius: '8px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid red',
}));


function Main() {
    return (
        <Box>
            <Grid container spacing={2} className="main-content">
                <StyledGridItem item>
                    <StyledPaper elevation={3}>
                        <Typography variant="h5" component="h2">
                            ToDo
                        </Typography>
                    </StyledPaper>
                </StyledGridItem>
                <StyledGridItem item>
                    <StyledPaper elevation={3}>
                        <Typography variant="h5" component="h2">
                            Doing
                        </Typography>
                    </StyledPaper>
                </StyledGridItem>
                <StyledGridItem item>
                    <StyledPaper elevation={3}>
                        <Typography variant="h5" component="h2">
                            Done
                        </Typography>
                    </StyledPaper>
                </StyledGridItem>
            </Grid>
        </Box>
    )
}

export default Main

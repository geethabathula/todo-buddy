import { Box, Button, Stack, Typography } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import React from 'react'
import "../components/Header.css";

function Header() {
    return (
        <Box gap={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
                <Typography variant="h3" component="h1" className="main-app-title">
                    To-Do Buddy
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        width: "10rem",
                        alignSelf: "center" // Aligns the button horizontally in the center
                    }}
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    disableRipple
                >
                    Add Task
                </Button>
            </Stack>
        </Box>
    )
}

export default Header

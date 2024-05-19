import React, { useState } from 'react';
import { Modal, Box, Typography, Button, IconButton, Divider, FormControl, Select, MenuItem, Chip, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const TaskModal = ({ open, onClose }) => {

    const handleClose = () => {
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 200, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', top: 0, right: 0 }}
                    disableRipple
                >
                    <CloseIcon />
                </IconButton>

            </Box>
        </Modal>
    );
};

export default TaskModal;

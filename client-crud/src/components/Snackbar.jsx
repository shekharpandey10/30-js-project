import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import { Alert } from '@mui/material';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export default function TransitionsSnackbar({ open, handleClose, severity, message }) {


    return (
        <div>
            <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={SlideTransition}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={1200}
            >
                <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

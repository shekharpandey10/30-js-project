import React, { createContext, useContext, useState } from 'react'
import TransitionsSnackbar from '../components/Snackbar'

const SnackbarContext = createContext()
function SnackbarProvider({ children }) {
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    })
    const showMessage = ({ open, message, severity }) => {
        setSnackbar({ open: true, message, severity });
    }
    return (
        <SnackbarContext.Provider value={showMessage}>
            {children}
            <TransitionsSnackbar open={snackbar.open} message={snackbar.message} severity={snackbar.severity}
                handleClose={() => setSnackbar(prev => ({ ...prev, open: false }))} />
        </SnackbarContext.Provider>
    )
}

export default SnackbarProvider
export const useSnackbar = () => useContext(SnackbarContext)

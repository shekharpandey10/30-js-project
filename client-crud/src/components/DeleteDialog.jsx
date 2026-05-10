import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React from 'react'

function DeleteDialog({ open, onClose, empName, handleDelete }) {
    return (
        <Dialog open={open} onClose={onClose}  >
            <DialogTitle>Delete Employee</DialogTitle>
            <DialogContent>
                <div>Are you sure want to Delete {empName}</div>
                <DialogActions>
                    <Button color='inherit' onClick={onClose}>Cancel</Button>
                    <Button type="subit" variant='contained' onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteDialog

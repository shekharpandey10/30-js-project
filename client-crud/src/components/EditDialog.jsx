import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import { CrossIcon, Shrink, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function EditDialog({ open, onClose, SelectedEmployee, setSaveEdit, mode }) {
    const [formData, setFormData] = useState({ name: '', email: '', designation: '' })
    const handleSubmit = async (e) => {
        e.preventDefault()
        await setSaveEdit(formData)
        setFormData({ name: '', email: '', designation: '' })
    }
    useEffect(() => {
        if (SelectedEmployee)
            setFormData(SelectedEmployee)
    }, [SelectedEmployee])
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{ m: 0, p: 2 }}>
                {mode} Employee
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <X size={20} />
                </IconButton>
            </DialogTitle>
            <form action="" onSubmit={handleSubmit}>
                <DialogContent dividers>
                    <TextField
                        fullWidth
                        label="Full Name"
                        value={formData?.name || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        value={formData?.email || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        label="Designation"
                        value={formData?.designation || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, designation: e.target.value }))}
                        margin="dense"
                    />
                    <DialogActions>
                        <Button color='inherit' onClick={onClose}>Cancel</Button>
                        <Button type="subit" variant='contained' onClick={onClose}>Submit</Button>
                    </DialogActions>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default EditDialog

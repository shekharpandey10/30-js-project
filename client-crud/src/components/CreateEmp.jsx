import React, { useState } from 'react'
import EditDialog from './EditDialog'
import { Button } from '@mui/material'
import { PlusIcon, Rss } from 'lucide-react'
import { useSnackbar } from '../contexts/SnackbarProvider'

function CreateEmp() {
    const [openCreate, setOpenCreate] = useState(false)
    const showMessage = useSnackbar()

    const createEmp = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/api/', {
                method: "POST",
                headers: {
                    'Content-type': "application/json"
                }
                , body: JSON.stringify({ ...data, empId: Math.ceil(Math.random() * 1000) })
            })
            const res = await response.json()
            if (res.success) {
                showMessage({ open: true, message: res?.message || "Emp created", severity: 'success' })
            } else {
                showMessage({ open: true, message: res?.message || "Creation failed", severity: 'error' })

            }
        } catch (error) {
            showMessage({ open: true, message: error?.message || "Creation failed", severity: 'error' })

        }
    }
    return (
        <div className='w-full'>
            <div className=' text-end mb-5'><Button onClick={() => setOpenCreate(true)} sx={{ bgcolor: 'purple', color: 'white' }}>Create Employee <PlusIcon /></Button></div>

            <EditDialog mode={'Create'} open={openCreate} onClose={() => setOpenCreate(false)} setSaveEdit={createEmp} />
        </div>
    )
}

export default CreateEmp

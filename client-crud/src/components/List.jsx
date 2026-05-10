import { useEffect, useState } from "react"
import DataTable from "./ListTable.jsx"
import EditDialog from "./EditDialog.jsx"
import TransitionsSnackbar from "./Snackbar.jsx"
import DeleteDialog from "./DeleteDialog.jsx"
import CreateEmp from "./CreateEmp.jsx"
import { PlusIcon } from "lucide-react"
import { Button } from "@mui/material"
import { useSnackbar } from "../contexts/SnackbarProvider.jsx"


const List = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [selectedEditRow, setSelectedEditRow] = useState(null)
    const [selectedRowDeleteId, setSelectedRowDeleteId] = useState(null)
    const [selectedRowDeleteName, setSelectedRowDeleteName] = useState(null)
    const showMessage = useSnackbar()
    const fetchList = async () => {
        try {
            setLoading(true)

            const data = await fetch('http://localhost:8080/api')
            const res = await data.json()

            if (res.success) {
                setList(res.data)
            } else {
                setList([])
            }

        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }
    const setSaveEdit = async (updatedData) => {
        try {
            const id = updatedData?.id
            if (!id) return
            const response = await fetch('http://localhost:8080/api/' + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData)
            })
            const res = await response.json();
            if (res.success) {
                showMessage({ open: true, message: res?.message || "Updated Successfully", severity: 'success' });
                fetchList();
            } else {
                showMessage({ open: true, message: res?.message || "Update failed", severity: 'error' });
            }
        } catch (error) {
            showMessage({ open: true, message: error?.message || "Updated failed", severity: 'error' })
        } finally {
            setOpenEdit(false)
        }
    }
    const handleEdit = (row) => {
        setSelectedEditRow(row)
        setOpenEdit(true)
    }
    const handleDelete = (id, name) => {
        setSelectedRowDeleteId(id)
        setSelectedRowDeleteName(name)
        setOpenDelete(true)
    }
    const handleDeleteConfirm = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/' + selectedRowDeleteId, {
                method: "DELETE",
            })
            const res = await response.json();
            if (res.success) {
                showMessage({ open: true, message: res.message || "Deleted Successfully", severity: 'success' })
                fetchList()
            } else {
                showMessage({ open: true, message: res.message || "failed to delete", severity: 'error' })

            }
        } catch (error) {
            showMessage({ open: true, message: error.message || "failed to delete", severity: 'error' })
        } finally {
            setSelectedRowDeleteId(null)
            setSelectedRowDeleteName(null)
            setOpenDelete(false)
        }
    }
    useEffect(() => {
        fetchList()
    }, [])
    return <div className="flex-1 flex items-center justify-center w-[70%] p-5 flex-col">
        <CreateEmp />
        <DataTable list={list} EditEmp={handleEdit} DeleteEmp={handleDelete} />
        <EditDialog open={openEdit} onClose={() => setOpenEdit(false)} SelectedEmployee={selectedEditRow} mode={'Edit'} setSaveEdit={setSaveEdit} />

        <DeleteDialog open={openDelete} onClose={handleDelete} handleDelete={handleDeleteConfirm} />
    </div>
}

export default List
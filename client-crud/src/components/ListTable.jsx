import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { DeleteIcon, Edit2Icon, TrashIcon } from 'lucide-react';

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ list, EditEmp, DeleteEmp }) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: ' name', width: 200 },
        { field: 'email', headerName: ' email', width: 200 },
        {
            field: 'designation',
            headerName: 'designation',
            width: 200,
        },
        {
            field: 'empId',
            headerName: 'employee Id',
            width: 200,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 160,
            sortable: false,

            renderCell: (params) => {
                return (
                    <>
                        <IconButton
                            color='primary'
                            onClick={() => EditEmp(params.row)}
                        >
                            <Edit2Icon />
                        </IconButton>

                        <IconButton
                            color='error'
                            onClick={() => DeleteEmp(params.row.id, params?.row?.name)}
                        >
                            <TrashIcon />
                        </IconButton>
                    </>
                );
            }
        }
    ];

    const rows = [
        { id: 1, name: 'Snow', email: 'Jon', designation: 35, empId: 44 },
        {
            "id": 6,
            "name": "mohan",
            "email": "mohan@gmail.com",
            "designation": "marketing",
            "empId": 3,
            "createdAt": "2026-05-09T19:01:55.286Z",
            "updatedAt": "2026-05-09T19:01:55.286Z"
        },
        { id: 1, name: 'Snow', email: 'Jon', designation: 35, empId: 44 },
        { id: 1, name: 'Snow', email: 'Jon', designation: 35, empId: 44 },
        { id: 1, name: 'Snow', email: 'Jon', designation: 35, empId: 44 },
        { id: 1, name: 'Snow', email: 'Jon', designation: 35, empId: 44 },
        { id: 1, name: 'Snow', email: 'Jon', designation: 35, empId: 44 },

    ];


    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={list}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{ border: 0 }}
            />
        </Paper>
    );
}

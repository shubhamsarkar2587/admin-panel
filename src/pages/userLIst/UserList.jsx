import { DeleteOutline } from '@mui/icons-material';
import { userTableDataRow } from "../../utils/dummyData";
import { Link } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import { useState } from 'react';

const UserList = () => {
  const [userData, setUserData] = useState(userTableDataRow);

  const handleUserDelete = ({ id }) => {
    const filteredUserData = userData.filter(e => e.id !== id)
    setUserData(filteredUserData);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70 
    },
    { 
      field: 'username',
      headerName: 'User',
      width: 180,
      renderCell: (params) => (
        <div className="flex items-center">
          <img className="rounded-full h-10 w-10 object-cover mr-2.5" src={params?.row?.avatar || ""} alt="" />
          <span>{params.row.username}</span>
        </div>
      )
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 180
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/user/${params.row.id}`}>
            <button
              className="cursor-pointer rounded-xl bg-[#3bb077] text-white px-2.5 py-1 mr-4"
            >
              Edit
            </button>
          </Link>
          <DeleteOutline
            className="delete_btn cursor-pointer"
            onClick={() => {
              handleUserDelete({ id: params.row.id })
            }}
          />
        </>
      )
    }
  ];

  return (
    <>
      <DataTable columns={columns} rows={userData}/>
    </>
  )
}

export default UserList;

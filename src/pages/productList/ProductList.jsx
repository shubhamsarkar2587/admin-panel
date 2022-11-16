import { useState } from 'react';
import { Link } from "react-router-dom";
import { DeleteOutline } from '@mui/icons-material';
import { productTableData } from "../../utils/dummyData";
import DataTable from "../../components/dataTable/DataTable";


const ProductList = () => {
  const [productData, setProductData] = useState(productTableData);

  const handleProductDelete = ({ id }) => {
    const filteredProductData = productData.filter(e => e.id !== id)
    setProductData(filteredProductData);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70 
    },
    { 
      field: 'product',
      headerName: 'Product',
      width: 180,
      renderCell: (params) => (
        <div className="flex items-center">
          <img className="rounded-full h-10 w-10 object-cover mr-2.5" src={params?.row?.image || ""} alt="" />
          <span>{params.row.name}</span>
        </div>
      )
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 180
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/product/${params.row.id}`}>
            <button
              className="cursor-pointer rounded-xl bg-[#3bb077] text-white px-2.5 py-1 mr-4"
            >
              Edit
            </button>
          </Link>
          <DeleteOutline
            className="delete_btn cursor-pointer"
            onClick={() => {
              handleProductDelete({ id: params.row.id })
            }}
          />
        </>
      )
    }
  ];

  return (
    <div className="">
      <DataTable columns={columns} rows={productData}/>
    </div>
  );
};

export default ProductList;

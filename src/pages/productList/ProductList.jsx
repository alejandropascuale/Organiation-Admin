import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productsRows } from '../../DummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {
    const [data, setData] = useState(productsRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'prudct', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
                <div className='prudctListItem'>
                    <img className='productListImg' src={params.row.img} alt={`${params.row.product} avatar`} />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row.id}`}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className='productListDelete' 
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                )
            }
        }
    ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

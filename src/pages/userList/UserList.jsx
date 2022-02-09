import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material'

export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img className='userListImg' src={params.row.avatar} alt={`${params.row.avatar} avatar`} />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <button className="userListEdit">Edit</button>
                        <DeleteOutline className='userListDelete' />
                    </>
                )
            }
        }
    ];

    const rows = [
        { id: 1, username: 'Jon Snow', 
            avatar: 'https://indiehoy.com/wp-content/uploads/2020/06/jon-snow-1200x675.jpg', 
            email: 'jonsnow@gmail.com', 
            status: 'active', 
            transaction: '$120.000' },
        { id: 2, username: 'Cersei Lannister', 
            avatar: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/10-lecciones-de-cersei-lannister/137617982-1-esl-ES/10-lecciones-de-Cersei-Lannister.jpg', 
            email: 'cerseilennister@gmail.com', 
            status: 'active', 
            transaction: '$110.000' },
        { id: 3, username: 'Jaime Lannister', 
            avatar: 'https://elcomercio.pe/resizer/6j1gRP1bjUEhVvIChBn5v3Kme1U=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DTIMFKW5LVFCTIIXOB4BPYFEX4.jpg',
            email: 'jaimelannister@gmail.com', 
            status: 'active', 
            transaction: '$130.000' },
        { id: 4, username: 'Arya Stark', 
            avatar: 'https://www.quever.news/u/fotografias/m/2020/10/10/f850x638-1887_79376_4730.jpg', 
            email: 'aryastark@gmail.com', 
            status: 'active', 
            transaction: '$145.000' },
        { id: 5, username: 'Daenerys Targaryen', 
            avatar: 'https://pbs.twimg.com/profile_images/1243475459125456896/e-zIQiFY_400x400.jpg', 
            email: 'daenerystargaryen@gmail.com', 
            status: 'active', 
            transaction: '$112.000' },
        { id: 6, username: 'Melisandre', 
            avatar: 'https://static.wikia.nocookie.net/hieloyfuego/images/2/28/Melisandre_HBO.JPG/revision/latest?cb=20120609041351', 
            email: 'melisandre@gmail.com', 
            status: 'active', 
            transaction: '$176.000' },
        { id: 7, username: 'Ferrara Clifford', 
            avatar: 'https://cdn.theorg.com/c9440d58-4026-4544-a379-88a14fee3dfc_small.jpg', 
            email: 'ferraraclifford@gmail.com', 
            status: 'active', 
            transaction: '$190.000' },
        { id: 8, username: 'Rossini Frances', 
            avatar: '', 
            email: 'rossinifrances@gmail.com', 
            status: 'active', 
            transaction: '$90.000' },
        { id: 9, username: 'Harvey Roxie', 
            avatar: '', 
            email: 'harveyroxie@gmail.com', 
            status: 'active', 
            transaction: '$156.000' },
    ];

  return (
    <div className='userList'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

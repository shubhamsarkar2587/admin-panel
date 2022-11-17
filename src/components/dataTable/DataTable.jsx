import './dataTable.css';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ columns, rows, pageSize }) => {
	return (
		<div className="userList" style={{ height: 'calc(100vh - 4rem)', width: '100%' }}>
			<DataGrid
				rows={rows || []}
				columns={columns || []}
				pageSize={pageSize || 10}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
				disableUnderline
			/>
		</div>
	);
};

export default Table;

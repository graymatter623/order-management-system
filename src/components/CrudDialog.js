import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import EditEmployeeInputsDialog from './EditEmployeeInputsDialog';
import DeleteEmployeeInputsDialog from './DeleteEmployeeInputsDialog';

const CrudDialog =({title,open,handleClose,type})=>{
	return (
		<div>
			{type === "EDIT" ? (<Dialog open={open} onClose={handleClose}>
				<DialogTitle>
					{title}
				</DialogTitle>
				<DialogContent>
					<EditEmployeeInputsDialog />	
				</DialogContent>
			</Dialog>) : (<Dialog open={open} onClose={handleClose}>
				<DialogTitle>
					{title}
				</DialogTitle>
				<DialogContent>
					<DeleteEmployeeInputsDialog />	
				</DialogContent>
			</Dialog>)}
		</div>
	);
}
export default CrudDialog;
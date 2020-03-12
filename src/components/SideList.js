import React from 'react';
import TreeViewDialog from './TreeViewDialog';
const SideList = ({isAdmin,classes,setShouldDraw})=>(
    <div
        className={classes.list}
        role="presentation"
        onKeyDown={()=> setShouldDraw}
    >
    <TreeViewDialog isAdmin ={isAdmin} classes={classes} setShouldDraw={setShouldDraw}/>
  </div>
);

export default SideList;
import React from 'react';
import TreeViewDialog from './TreeViewDialog';
const SideList = ({classes,setShouldDraw})=>(
    <div
        className={classes.list}
        role="presentation"
        onKeyDown={()=> setShouldDraw}
    >
    <TreeViewDialog classes={classes} setShouldDraw={setShouldDraw}/>
  </div>
);

export default SideList;
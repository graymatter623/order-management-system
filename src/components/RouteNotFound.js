import React from "react";
import { Redirect } from "react-router-dom";
import ButtonDialog from './shared-components/ButtonDialog';
import {useState} from 'react';
const RouteNotFoundDialog = () => {
  // let isReload = false;
  const {shouldRedirect , shouldRedirectToggle} = useState(false);
  const handleClick = (event)=>{
  	shouldRedirectToggle(true);
  }
	return (
      <div>
    		<ButtonDialog
    			id="redirect-to-homepage-id"
    			variant="contained"
    			size="large"
    			color="primary"
    			onClick={handleClick}
    		/>
    		{shouldRedirect && <Redirect to="/dashboard"/>}

      </div>
  );
}; 
export default RouteNotFoundDialog;

import React from 'react';
import Button from '@material-ui/core/Button';
const ButtonDialog = ({className,color,size,variant,onClick,label})=>(
    <Button
        className={className}
        color={color}
        size={size}
        variant={variant}
        onClick={onClick}
    >
        {label}
    </Button>
);
export default ButtonDialog;
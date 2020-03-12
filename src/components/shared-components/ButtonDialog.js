import React from 'react';
import Button from '@material-ui/core/Button';
const ButtonDialog = ({id,className,color,size,variant,onClick,label,component})=>(
    <Button
        id={id}
        className={className}
        color={color}
        size={size}
        variant={variant}
        onClick={onClick}
    >
        { component || label}
    </Button>
);
export default ButtonDialog;
import React from 'react';
import TextField from '@mui/material/TextField';

export const AppInput = (props) => (
    <TextField label={props.label} type={props.type} helperText={props.title} fullWidth {...props} />
);

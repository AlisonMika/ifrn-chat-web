import React from 'react';
import TextField from '@mui/material/TextField';

const AppInput = (props) => (
    <TextField label={props.label} type={props.type} helperText={props.title} fullWidth {...props} />
);

export default AppInput;
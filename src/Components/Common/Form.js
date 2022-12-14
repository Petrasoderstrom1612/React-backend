import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button.js';
import styled from 'styled-components/macro';

export default function BasicTextFields({title, setEmail, setPassword, email, password, handleAction}) {
    return (
        <div>
            <div className="heading-container">
                <h3>
                {title} Form
                </h3>
            </div>

            <Box component="form" sx={{'& > :not(style)': { m: 1},}} noValidate autoComplete="off">
                <TextField id="email" label="Enter the Email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" />
                <TextField id="password" label="Enter the Password" value={password} onChange={e => setPassword(e.target.value)} variant="outlined" />
                <Label2>Minimum 6 digits for password</Label2>
            </Box>

            <Button title={title} handleAction={handleAction} />
        </div>
    );
}

const Label2 = styled.p`
`
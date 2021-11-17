import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const AppMenu: React.FC = () => {
    return (
        <>
            <Box sx={{ width: 500 }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>New Order</Button>
                    <Button>View Order</Button>
                    <Button>View Transaction</Button>
                </ButtonGroup>
            </Box>
        </>
    )
}

export default AppMenu

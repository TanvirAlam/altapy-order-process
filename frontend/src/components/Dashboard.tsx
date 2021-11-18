import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import AppMenu from "./AppMenu";

const Dashboard: React.FC = () => {
    return (
        <div>
            <Paper elevation={3}>
                <BottomNavigation
                    showLabels
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <AppMenu />
                </BottomNavigation>
            </Paper>
        </div>
    );
}

export default Dashboard;

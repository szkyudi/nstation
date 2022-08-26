import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="h1" variant="h6" sx={{ flexGrow: 1 }}>
          N駅以内の駅探し
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

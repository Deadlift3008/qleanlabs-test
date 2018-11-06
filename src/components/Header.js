import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
    <Fragment>
        <CssBaseline />
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Список карточек
                </Typography>
            </Toolbar>
        </AppBar>
    </Fragment>
);

export default Header;

import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import AppContext from '../context/AppContext';

const Header = () => {
    const TIME = 10000;

    const { state } = React.useContext(AppContext);
    const [value, setValue] = React.useState(state);

    setInterval(() => {
        if (value < 2)
            setValue(value + 1);
    }, TIME);

    return (
        <AppBar position="sticky" style={{ marginBottom: '5vh' }}>
            <Tabs value={value} centered>
                <Tab label="Declare" />
                <Tab label="Ban Phase" />
                <Tab label="Pick Phase" />
            </Tabs>
        </AppBar>
    );
}

export default Header;
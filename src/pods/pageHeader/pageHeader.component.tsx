import { AppBar, Tab, Tabs } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Cart } from './components/cart.component';

export const PageHeaderComponent = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const onHandleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    }

    return (
        <AppBar

            sx={{
                position: 'sticky',
                margin: '0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 50px 10px 50px',
                zIndex: 2,
            }}
        >
            <Tabs

                value={selectedTab}
                onChange={onHandleTabChange}
            >
                <Tab
                    value={0}
                    component={Link}
                    to="/cats"
                    label="Cats"
                    className='tab'
                    sx={{
                        backgroundColor: selectedTab === 0 ? 'blue' : 'transparent',
                        marginBottom: '5px',
                        '&.Mui-selected': {
                            backgroundColor: 'transparent',
                            color: 'white', // Color del texto cuando está seleccionado
                            borderBottom: '1px solid white'
                        },
                    }}
                />
                <Tab
                    value={1}
                    component={Link}
                    to="/dogs"
                    label="Dogs"
                    className='tab'
                    sx={{
                        backgroundColor: selectedTab === 1 ? 'blue' : 'transparent',
                        marginBottom: '5px',
                        '&.Mui-selected': {
                            backgroundColor: 'transparent', // Fondo para el Tab seleccionado
                            color: 'white', // Color del texto cuando está seleccionado
                            borderBottom: '1px solid white'
                        },
                    }}
                />
            </Tabs>
            <Cart />
        </AppBar>

    )
}
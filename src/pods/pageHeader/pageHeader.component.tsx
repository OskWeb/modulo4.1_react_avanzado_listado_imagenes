import { AppBar, createTheme, Tab, Tabs, ThemeProvider } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Cart } from './components/cart.component';
import { CartContext } from '../../core/context/cartContext';

export const PageHeaderComponent = () => {

    const [selectedTab, setSelectedTab] = useState("/cats");
    const context = useContext(CartContext);
    const { setCurrentPage } = context;

    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;

    const onHandleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        navigate(newValue);
    }

    useEffect(() => {
        setCurrentPage(0);
    }, [selectedTab])

    const theme = createTheme({
        components: {
            MuiTabs: {
                styleOverrides: {
                    root: {
                        '& .MuiTabs-indicator': {
                            backgroundColor: 'white'
                        }
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        color: 'black',
                        '&.Mui-selected': {
                            color: 'white',
                        },

                    }
                }
            }
        }
    })

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
                backgroundColor: '#42a5f5'
            }}
        >
            <ThemeProvider theme={theme}>
                <Tabs
                    value={currentPath}
                    onChange={onHandleTabChange}
                >
                    <Tab
                        key="tab1"
                        component={Link}
                        to="/cats"
                        label="Cats"
                        value="/cats"
                        className='tab'
                    />
                    <Tab
                        key="tab2"
                        component={Link}
                        to="/dogs"
                        label="Dogs"
                        value="/dogs"
                        className='tab'
                    />
                </Tabs>
            </ThemeProvider>
            <Cart />
        </AppBar>

    )
}
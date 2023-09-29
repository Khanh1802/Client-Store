import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]

const navStyle = {
    color: 'inherit',
    textDecoration: "none",
    typography: 'h6',
    //create pseudo elements
    '&:hover': {
        color: 'darkblue'
    },
    '&.active': {
        color: 'tomato'
    }
}

interface Props {
    darkMode: boolean;
    handleChangeModeDark: () => void;
}
export default function Header({ darkMode, handleChangeModeDark }: Props) {
    return (
        <div>
            <AppBar position="static" sx={{ mb: 4 }} >
                <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Box display='flex' alignItems='center'>
                        <Typography variant="h6" component={NavLink} to='/'
                            sx={navStyle}
                        >
                            Store
                        </Typography>
                        <Switch checked={darkMode} onChange={handleChangeModeDark} />
                        {/* CSS Flexbox to correctly space out the links across the header */}
                    </Box>
                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>

                    <Box display='flex' alignItems='center'>
                        <IconButton color="inherit" component={Link} to={`/basket`}>
                            {/* display a number above the icon. */}
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                        <List sx={{ display: 'flex' }}>
                            {rightLinks.map(({ title, path }) => (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navStyle}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>

    );
}

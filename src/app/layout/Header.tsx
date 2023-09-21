import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]
interface Props {
    darkMode: boolean;
    handleChangeModeDark: () => void;
}
export default function Header({ darkMode, handleChangeModeDark }: Props) {
    return (
        <div>
            <AppBar position="static" sx={{ mb: 4 }} >
                <Toolbar>
                    <Typography variant="h6" component={NavLink} to='/'
                        sx={{ color: "inherit", textDecoration: "none" }}
                    >
                        Store
                    </Typography>
                    <Switch checked={darkMode} onChange={handleChangeModeDark} />
                    {/* CSS Flexbox to correctly space out the links across the header */}
                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={{ color: 'inherit', typography: 'h6' }}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>

                    <IconButton color="inherit" >
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
                                sx={{ color: 'inherit', typography: 'h6' }}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Toolbar>
            </AppBar>
        </div>

    );
}

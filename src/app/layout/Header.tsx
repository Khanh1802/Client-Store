import { AppBar, Toolbar, Typography } from "@mui/material";
export default function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Store
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    );
}

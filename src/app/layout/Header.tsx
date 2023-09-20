import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
interface Props {
    darkMode: boolean;
    handleChangeModeDark: () => void;
}
export default function Header({ darkMode, handleChangeModeDark }: Props) {
    return (
        <div>
            <AppBar position="static" sx={{ mb: 4 }} >
                <Toolbar>
                    <Typography variant="h6">
                        Store
                    </Typography>
                    <Switch checked={darkMode} onChange={handleChangeModeDark} />
                </Toolbar>
            </AppBar>
        </div>

    );
}

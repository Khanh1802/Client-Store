import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { currencyFormat, delivery } from "../../app/util/util";
import { useStoreContext } from "../../app/context/StoreContext";


const BasketSummary = () => {
    const { basket } = useStoreContext();
    //C1
    // const subtotal = basket ? basket.items.map(item => {
    //     return ((item.price * item.quantity) / 100);
    // }).reduce((sum, item) => sum + item, 0) : 0;

    //C2
    const subtotal = basket ? basket.items.reduce((sum, item) => sum + ((item.price * item.quantity)), 0) : 0;
    const deliveryFee = delivery(subtotal);
    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal + deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{ fontStyle: 'italic' }}>*Orders over $1000 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default BasketSummary;
import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../checkout/CheckoutPage";
import Catalog from "../../features/catalog/Catalog";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '/catalog', element: <Catalog /> },
            { path: '/catalog/:id', element: <ProductDetails /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/contact', element: <ContactPage /> },
            // /basket => route take from component={Link} to={`/basket`}>
            { path: '/basket', element: <BasketPage /> },
            { path: '/checkout', element: <CheckoutPage /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> }
        ],
    },
]);

export default router;
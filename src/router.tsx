import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productLoader } from "./views/Products";
import NewProduct, {action as NewProductAction} from "./views/NewProduct";
import EditProduct, {loader as EditProductLoader, action as EditProductAction} from "./views/EditProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                index: true,
                element: <Products />,
                loader: productLoader
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: NewProductAction
            },
            {
                path:'productos/:id/editar',
                element: <EditProduct />,
                loader: EditProductLoader,
                action: EditProductAction
            }
        ]
    }
])
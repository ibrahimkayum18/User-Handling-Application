import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import UserList from '../Pages/UserList/UserList';
import Details from '../Pages/Details/Details';
import ErrorPage from '../Components/ErrorPage';
import AddUser from '../Pages/AddUser/AddUser';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<ErrorPage />,
        children: [
            {
                path:'/',
                element:<UserList />
            }
        ]
    },
    {
        path:'/details/:id',
        element:<Details />,
        errorElement:<ErrorPage />
    },
    {
        path:'/addUser',
        element:<AddUser />,
        errorElement:<ErrorPage />
    }
])

export default Route;
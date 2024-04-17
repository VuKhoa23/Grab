import { useRoutes } from 'react-router-dom'
import Main from '../Main/Main';
import Homelayout from '../Layout/Homelayout';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';


export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <Homelayout />,
            children: [
                {
                    path: '/',
                    element: <Main />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/signup',
                    element: <Signup />
                },
            ]

        }
    ]);
    return routing;
}

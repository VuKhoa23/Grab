import { useRoutes } from 'react-router-dom'
import Main from '../Main/Main';
import Homelayout from '../Layout/Homelayout';
import Login from '../Login/Login';


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
                }
            ]

        }
    ]);
    return routing;
}

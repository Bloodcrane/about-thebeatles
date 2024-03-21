import HomePage from "./Pages/HomePage"
import FactsPage from "./Pages/FactsPage"
import AboutPage from "./Pages/AboutPage"
import SingleFactsPage from "./Pages/SingleFactsPage"

const router = [
    {
        element: <HomePage />,
        path: '/',
        exact: true
    },
    {
        element: <AboutPage />,
        path: '/about'
    },
    {
        element: <FactsPage />,
        path: '/fact/:page/:id',
        routes: [
            {
                element: <SingleFactsPage />,
                path: '/fact/:page/:id'
            }
        ]
    },
]

export default router
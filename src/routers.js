import HomePage from "./Pages/HomePage"
import FactsPage from "./Pages/FactsPage" 
import AboutPage from "./Pages/AboutPage"
import SongsPage from "./Pages/SongsPage"

const router = [
    {
        element: <HomePage/>,
        path: '/',
        exact: true
    },
    {
        element: <AboutPage/>,
        path: '/about'
    },
    {
        element: <FactsPage/>,
        path: '/fact/:page/:id',
    },
    {
        element: <FactsPage/>,
        path: '/fact'
    },
    {
        element: <SongsPage/>,
        path: '/songs'
    },
    {
        element: <SongsPage/>,
        path: '/songs/:page/:id'
    }
]

export default router

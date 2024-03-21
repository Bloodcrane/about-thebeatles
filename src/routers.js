import HomePage from "./Pages/HomePage"
import FactsPage from "./Pages/FactsPage" 
import AboutPage from "./Pages/AboutPage"

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
    }
]

export default router

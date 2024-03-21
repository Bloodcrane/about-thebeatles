import HomePage from "./Pages/HomePage.jsx"
import FactsPage from "./Pages/FactsPage.jsx"
import AboutPage from "./Pages/AboutPage.jsx"
import SingleFactsPage from "./Pages/SingleFactsPage.jsx"

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
    {
      element: <FactsPage />,
      path: '/fact',
      routes: [
          {
              element: <SingleFactsPage />,
              path: '/fact/:page/:id'
          }
      ]
    },
]

export default router
import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import Contact from './pages/contact/Contact.jsx'
import Content from "./pages/content/Content.jsx"
import About from "./pages/about/About.jsx";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/', 
                element: <Home />
            },
            {
                path: 'about', 
                element: <About />
            },
            {
                path: 'contact', 
                element: <Contact />
            },
            {
                path: 'content', 
                element: <Content />
            },
        ]
    },
]);
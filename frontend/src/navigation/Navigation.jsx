import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import QuizApp from '../components/QuizApp';
import Navbar from '../components/Navbar';
import Quiz from '../components/Quiz';
import GenarateIdCard from '../components/GenerateIdCard';
import ChatApp from '../components/chapapp/ChatApp';

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <div>welcome to my app</div>,
//     },
//     {
//         path: "/admin",
//         element: <QuizApp />,
//     },

//     {
//         path: "/entry-test",
//         element: <Quiz />,
//     },
//     {
//         path: "/id-card",
//         element: <GenarateIdCard />,
//     },
//     {
//         path: "/*",
//         element: <div>404 error no page found</div>,
//     },

// ]);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [{
            path: "/entry-test",
            element: <Quiz />
        }]
    },
    {
        path: "/admin",
        element: <QuizApp />
    },
    {
        path: "/id-card",
        element: <GenarateIdCard />
    },
    {
        path: "/*",
        element: <div>404 error no page found</div>
    },
    {
        path: "/chat-app",
        element: <ChatApp />
    },

])
const Navigation = ({ children }) => {
    return (
        <RouterProvider router={router} >
            <Navbar />
            {children}
        </RouterProvider>
    )
}

export default Navigation
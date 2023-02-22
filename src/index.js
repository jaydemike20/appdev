import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Pages/Dashboard';
import AddItem from './Pages/addItem';
import EditItem from './Pages/editItem';
import DeleteItem from './Pages/deleteItem';
import store from './redux/store';
import { Provider } from 'react-redux';

// import react router
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "AddItem",
        element: <AddItem />,
      },
      {
        path: "EditItem",
        element: <EditItem />,
      },
      {
        path: "DeleteItem",
        element: <DeleteItem />,
      }    
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}  />
    </Provider>


);

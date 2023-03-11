// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import Dashboard from './Pages/Dashboard';
// import AddItem from './Pages/addItem';
// import EditItem from './Pages/editItem';
// import DeleteItem from './Pages/deleteItem';
// import store from './redux/store';
// import { Provider } from 'react-redux';
// import sarisari from '../src/images/cart.gif'

// // import react router
// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";
// import App from './App';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <IntroductionScreen/>,
//     },
//     {
//         path: "Dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "AddItem",
//         element: <AddItem />,
//       },
//       {
//         path: "EditItem",
//         element: <EditItem />,
//       },
//       {
//         path: "DeleteItem",
//         element: <DeleteItem />,
//       }    
// ])

// function IntroductionScreen() {
//   const [redirect, setRedirect] = useState(false);




//   useEffect(() => {
//     const visitedIntro = sessionStorage.getItem('visitedIntro');
//     if (visitedIntro) {
//       setRedirect(true);
//     } else {
//       const timer = setTimeout(() => {
//         setRedirect(true);
//         sessionStorage.setItem('visitedIntro', true);
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   if (redirect) {
//     return <Dashboard />
//   }

//   return(
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', background: '#35475F' }}>
//       <img src={sarisari} style={{ maxWidth: '100%', height: 'auto' }} />
//       <h1 style={{color: 'white', letterSpacing: '5px'}}>Sari-Sari Store</h1>
//     </div>
//   )


// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Provider store={store}>
//       <RouterProvider router={router}  />
//     </Provider>


// );
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Pages/Dashboard';
import AddItem from './Pages/addItem';
import EditItem from './Pages/editItem';
import DeleteItem from './Pages/deleteItem';
import store from './redux/store';
import { Provider } from 'react-redux';
import sarisari from '../src/images/cart.gif';

// import react router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';

function IntroductionScreen() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const visitedIntro = sessionStorage.getItem('visitedIntro');
    if (visitedIntro) {
      setRedirect(true);
    } else {
      const timer = setTimeout(() => {
        setRedirect(true);
        sessionStorage.setItem('visitedIntro', true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (redirect) {
    return <Dashboard />;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', background: '#35475F' }}>
      <img src={sarisari} style={{ maxWidth: '100%', height: 'auto' }} alt="cart" />
      <h1 style={{color: 'white', letterSpacing: '5px'}}>Sari-Sari Store</h1>
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<IntroductionScreen />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="AddItem" element={<AddItem />} />
        <Route path="EditItem" element={<EditItem />} />
        <Route path="DeleteItem" element={<DeleteItem />} />
      </Routes>
    </Router>
  </Provider>,
  root
);

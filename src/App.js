import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'; // Import Navigate
import Home from './components/Home';
import Rootlayout from './components/Rootlayout';
import Eventcalender  from './components/EventCalender';
import Feedback from './components/feedback';
import Langexg from './components/langexg';
import Localinfo from './components/localinfo';
import Lostfound from './components/lostfound';
import Repair from './components/repair';
import Livechat from './components/livechat';
import Resourceshare from './components/resourceshare'; 
import Login from './components/Login';
function App() {
  let browserRouter = createBrowserRouter([
    {
      path: '',
      element: <Rootlayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'eventcalender',
          element:<Eventcalender/>
        },
        {
          path:'login',
          element:<Login />
        },
        {
          path: 'feedback',
          element: <Feedback />
        },
        {
          path: 'langexg',
          element: <Langexg />
        },
        {
          path: 'localinfo',
          element: <Localinfo />
        },
        {
          path: 'lostfound',
          element: <Lostfound />
        },
        {
          path: 'repair',
          element: <Repair />
        },
        {
          path: 'resouceshare',
          element: <Resourceshare />
        },
        {
          path: 'livechat',
          element: <Livechat />
        },
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;

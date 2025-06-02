import { RouterProvider } from 'react-router';

import './App.css';
import { router } from './shared/router';
import { AuthProvider } from './shared/providers/AuthProvider';


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App

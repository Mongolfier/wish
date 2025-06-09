import { RouterProvider } from 'react-router';
import { Layout } from './widgets/Layout';
import { router } from './shared/router';
import { AuthProvider } from './shared/providers/AuthProvider';
import { Providers } from './app/providers/Providers';
import './shared/config/i18n/i18n';

import './App.css';

function App() {
  return (
    <Providers>
      <AuthProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </AuthProvider>
    </Providers>
  );
}

export default App;

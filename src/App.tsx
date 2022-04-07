import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'layout/Layout';

import { HomePage } from 'pages/HomePage/HomePage';

import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import './assets/styles/styles.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Error404 from './pages/Error404';
import Auth from './pages/auth/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth state={1} />} />
          <Route path='/login' element={<Auth state={1} />} />
          <Route path='/signup' element={<Auth state={2} />} />
          <Route path='/model' element={<Main />} />

          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

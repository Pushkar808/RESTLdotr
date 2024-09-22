import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { UserForm } from './Pages/UserForm';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/form" element={< UserForm />} />
      </Routes>

    </>
  );
}

export default App;

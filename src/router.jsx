import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Menu from './pages/menu/Menu.jsx'
import Opcoes from './pages/opcoes/Opcoes.jsx'
import Login from './pages/login/Login.jsx'

const Router = () => (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/opcoes/:id" element={<Opcoes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

);

export default Router;

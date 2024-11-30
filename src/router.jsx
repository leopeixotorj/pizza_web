import { BrowserRouter, Routes, Route } from "react-router";
import Leiaute from './Leiaute.jsx'
import Logado from './Logado.jsx'
import Home from './Home.jsx'
import Menu from './pages/menu/Menu.jsx'
import Opcoes from './pages/opcoes/Opcoes.jsx'
import Login from './pages/login/Login.jsx'

const Router = () => (

    <BrowserRouter>
      <Routes>
        <Route element={<Leiaute />} >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Logado />} >
            <Route path="/menu" element={<Menu />} />
            <Route path="/opcoes/:id" element={<Opcoes />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

);

export default Router;

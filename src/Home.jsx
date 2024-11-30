import { Link } from "react-router";
import { Outlet } from "react-router";

function Home() {
  return (
    <>
      <h1>Home</h1>

      <Outlet/>

      <Link to="/menu">Menu</Link>
      <Link to="/login">Login</Link>
    </>
  )
}

export default Home

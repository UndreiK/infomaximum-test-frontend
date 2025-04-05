import { NavLink } from "react-router"

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "blue",
    textDecoration: "none",
  }

  const inactiveStyle = {
    fontWeight: "normal",
    color: "black",
    textDecoration: "none",
  }

  return (
    <header
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1>
        <NavLink to="/" css={{ textDecoration: "none", color: "black" }}>
          Купи авто
        </NavLink>
      </h1>
      <nav css={{ display: "flex", gap: "20px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Home
        </NavLink>
        <NavLink
          to="/favorite"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Favorite
        </NavLink>
      </nav>
    </header>
  )
}

export default Header

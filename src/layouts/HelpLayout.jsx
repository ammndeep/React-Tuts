import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div>
      <h2>Help Page</h2>
      <nav className="help-nav">
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

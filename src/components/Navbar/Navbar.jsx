import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Nav(params) {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div>
        <a href="" className={classes.item}>
          News
        </a>
      </div>
      <div>
        <a href="" className={classes.item}>
          Music
        </a>
      </div>
      <div>
        <a href="" className={classes.item}>
          Settings
        </a>
      </div>
    </nav>
  );
}

export default Nav;

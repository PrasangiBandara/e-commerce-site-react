import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <h1>Welcome</h1>
        <div>
          <header className="navbar" style={{}}>
            <nav>
              <ul>
                <li>
                  <Button id="demo-positioned-button">
                    <Link to="/">Home</Link>
                  </Button>
                </li>

                <li>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <Link>Brands</Link>
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to="/laptops">Laptop</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/tv">TV</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/frig">Refrigerator</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/phone">Mobile Phone</Link>
                    </MenuItem>
                  </Menu>
                </li>

                <li>
                  <Button id="demo-positioned-button">
                    <Link to="/offer">Offers</Link>
                  </Button>
                </li>

                <li>
                  <Button id="demo-positioned-button">
                    <Link to="/contact">ContactUs</Link>
                  </Button>
                </li>

                <li>
                  <Button id="demo-positioned-button"></Button>
                </li>

                <li>
                  <Button id="demo-positioned-button"></Button>
                </li>

                <li>
                  <Button id="demo-positioned-button"></Button>
                </li>

                <li>
                  <Button id="demo-positioned-button"></Button>
                </li>

                <li>
                  <Button id="demo-positioned-button"></Button>
                </li>

                <li>
                  <Button id="demo-positioned-button">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7YXFahZltXExsHBYJlMMilmNLPyojthQtQ&usqp=CAU"
                      width="125px"
                    />
                  </Button>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}

export default Header;

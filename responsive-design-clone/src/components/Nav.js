import { Component } from "react";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
    };
  }

  animate = () => {
    this.setState({ showNav: !this.state.showNav });
  };

  render() {
    return (
      <div className="menu">
        <nav>
          <div onClick={this.animate} className="menuBtn">
            MENU
          </div>
          <ul className={this.state.showNav ? "navList" : "hideNav"}>
            <li>
              <a href="#services" onClick={this.animate}>
                Services
              </a>
            </li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
          <ul className="fullSizeMenu">
            <li>
              <a href="#services" onClick={this.animate}>
                Services
              </a>
            </li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;

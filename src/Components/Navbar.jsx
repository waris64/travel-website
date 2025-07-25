import { Component } from "react";
import { MenuItems } from "./MenuItems";
import {Link} from 'react-router-dom'
class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState((prev) => ({ clicked: !prev.clicked }));
  };

  render() {
    const { clicked } = this.state;

    return (
      <nav className="fixed top-[5%] left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1200px] h-[70px] px-4 flex justify-between items-center bg-white shadow-md rounded-[13px] z-50">

        <h1 className="text-xl font-bold text-[#01959a]">Trippy</h1>

        <div
          className="text-2xl md:hidden cursor-pointer z-50"
          onClick={this.handleClick}
        >
          <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        <ul
          className={`absolute left-0 top-[70px] w-full bg-white flex flex-col items-center gap-2 transition-all duration-300 ease-in-out md:static md:flex-row md:w-auto md:bg-transparent md:gap-4 ${
            clicked ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"
          }`}
        >
          {MenuItems.map((item, index) => (
            <li key={index} className="w-full md:w-auto text-center">
              <Link
                className="block w-full px-4 py-2 text-sm md:text-base font-semibold text-black hover:bg-[#01959a] hover:text-white transition-colors duration-200 rounded"
                to={item.url}
              >
                <i className={`${item.icon} mr-2`}></i>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

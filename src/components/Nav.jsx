import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index.js";
const Nav = () => {
  return (
    <header className="absolute backdrop-blur-md backdrop-brightness-110 z-10 w-full py-4 backdrop:backdrop-blur-sm padding-x">
      <nav className="flex items-center max-container">
        <a href="/"></a>
        <img
          src={headerLogo}
          alt="An Logo"
          width={130}
          height={28}
          className="relative pt-6 scale-100 top-3"
        />
      </nav>
      <ul className="flex items-center justify-center gap-16 -mt-4 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-lg hover:border-b hover:border-gray-400 px-1 hover:hover:tracking-[4px] hover:font-[600] hover:text-gray-900 duration-500 leading-normal font-montserrat text-slate-gray"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="justify-end hidden max-lg:flex ">
        <img src={hamburger} alt="Hamburger" width={25} height={25} />
      </div>
    </header>
  );
};

export default Nav;

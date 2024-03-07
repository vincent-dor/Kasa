import logo from "../../assets/images/logo.svg";
import Nav from "../Nav";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="header__logo" src={logo} alt="logo kasa" />
      </figure>
      <Nav />
    </header>
  );
}

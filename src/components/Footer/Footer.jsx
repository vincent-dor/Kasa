import logo from "../../assets/images/logo-footer.svg";

export default function Footer() {
	return (
		<footer className="footer">
			<img src={logo} alt="logo de kasa" />
			<p className="footer__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
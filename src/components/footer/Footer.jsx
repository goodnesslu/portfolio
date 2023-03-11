import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container socials grid">
				<div className="footer__socials">
					<a
						href="https://www.linkedin.com/in/goodnesslu"
						target="_blank"
						className="footer__social-link"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://www.twitter.com/GoodnessLu"
						target="_blank"
						className="footer__social-link"
					>
						<FaTwitter />
					</a>
					<a
						href="https://github.com/goodnesslu"
						target="_blank"
						className="footer__social-link"
					>
						<FaGithub />
					</a>
				</div>

				<p className="footer__copyright text-cs">
					All Rights Reserved <span>&copy; 2023</span>.
				</p>

				<p className="footer__copyright text-cs">
					Developed by <span>Goodness Lu</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;

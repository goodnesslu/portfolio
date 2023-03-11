import React from "react";
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import CV from "../../assets/cv.jpeg";
import "./home.css";

const Home = () => {
	return (
		<section className="home" id="home">
			<div className="home__wrapper">
				<div className="home__container container">
					<p className="home__subtitle text-cs">
						Hello, <span>I am</span>
					</p>
					<h1 className="home__title text-cs">
						<span>GOOD</span>NESS
					</h1>
					<p className="home__job">
						<span className="text-cs">I Build </span>
						<b>Creative & Functional</b>
						<span className="text-cs"> &nbsp; Digital experiences </span>
					</p>

					<div className="home__img-wrapper">
						<div className="home__banner">
							<img src={profileImg} alt="" className="home__profile" />
						</div>

						<p className="home__data home__data-one">
							<span className="text-lg">
								{" "}
								7<b>+</b>
							</span>
							<span className="text-sm text-cs">
								Years of <span>Experience</span>
							</span>
						</p>

						<p className="home__data home__data-two">
							<span className="text-lg">
								{" "}
								55<b>+</b>{" "}
							</span>
							<span className="text-sm text-cs">
								Completed <span>Projects</span>
							</span>
						</p>

						<img src={shapeOne} alt="" className="shape shape__1" />
						<img src={shapeTwo} alt="" className="shape shape__2" />
						<img src={shapeTwo} alt="" className="shape shape__3" />
					</div>

					<p className="home__text">
						With a rich experince in graphic design, web design, web & app
						development, CMS applications like wordpress among others. I'd love
						to talk with you about your project.
					</p>

					<div className="home__socials">
						<a
							href="https://www.linkedin.com/in/goodnesslu"
							target="_blank"
							className="home__social-link"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://www.twitter.com/GoodnessLu"
							target="_blank"
							className="home__social-link"
						>
							<FaTwitter />
						</a>
						<a
							href="https://github.com/goodnesslu"
							target="_blank"
							className="home__social-link"
						>
							<FaGithub />
						</a>
					</div>

					<div className="home__btns">
						<a download="" href={CV} traget="_blank" className="btn text-cs">
							Resume / CV
						</a>
						<a href="#skills" className="hero__link text-cs">
							My Skills
						</a>
					</div>
				</div>

				<div className="section__deco deco__left">
					<img src={shapeOne} alt="" className="shape" />
				</div>
			</div>

			<div className="section__bg-wrapper">
				<span className="bg__title">Web Developer</span>
			</div>
		</section>
	);
};

export default Home;

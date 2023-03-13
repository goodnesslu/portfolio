import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import "./pricing.css";

const Pricing = () => {
	return (
		<section className="pricing section" id="pricing">
			<h2 className="section__title text-cs">Pricing</h2>
			<p className="section__subtitle">
				My <span>Price Board</span>
			</p>

			<div className="pricing__container container grid">
				<div className="pricing__item card card-one">
					<span className="pricing__subtitle text-cs">Hourly Rate</span>
					<h3 className="pricing__price">
						20 <span>$</span> <em>Hour</em>
					</h3>

					<p className="pricing__description">
						Hourly rate is for projects that can be billed by the hour. I
						typically don't do branding and development projects with this
						pricing system. This includes any time spent planning.
					</p>

					<ul className="pricing__list">
						<li className="list__item">
							<FaCheck className="list__icon" />
							<span>Content Production</span>
						</li>

						<li className="list__item">
							<FaCheck className="list__icon" />
							<span>Advertising</span>
						</li>

						<li className="list__item">
							<del>Web & App Development</del>
						</li>

						<li className="list__item">
							<del>Branding & Design</del>
						</li>
					</ul>

					<a href="#" className="btn pricing__btn text-cs">
						Free Strategy Call
						<FaArrowRight className="pricing__btn-icon" />
					</a>

					<img src={shapeTwo} alt="" className="shape c__shape" />
				</div>

				<div className="pricing__item-wrapper">
					<span className="pricing__label text-cs">Popular</span>
					<div className="pricing__item card card-one">
						<span className="pricing__subtitle text-cs">Freelanceing</span>
						<h3 className="pricing__price">
							200 <span>$</span> <em>Project</em>
						</h3>

						<p className="pricing__description">
							This pricing depends on the size and scope of your project. Please
							request for quotation during discovery call. Includes development,
							Design and large content projects.
						</p>

						<ul className="pricing__list">
							<li className="list__item">
								<FaCheck className="list__icon" />
								<span>Branding & Design</span>
							</li>

							<li className="list__item">
								<FaCheck className="list__icon" />
								<span>Web & App Development</span>
							</li>

							<li className="list__item">
								<FaCheck className="list__icon" />
								<span>Advertising</span>
							</li>

							<li className="list__item">
								<FaCheck className="list__icon" />
								<span>Content Production</span>
							</li>
						</ul>

						<a href="#" className="btn pricing__btn text-cs">
							Free Strategy Call
							<FaArrowRight className="pricing__btn-icon" />
						</a>

						<img src={shapeTwo} alt="" className="shape c__shape" />
					</div>
				</div>

				<div className="pricing__item card card-one">
					<span className="pricing__subtitle text-cs">Full Time</span>
					<h3 className="pricing__price">
						1,249 <span>$</span> <em>Month</em>
					</h3>

					<p className="pricing__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit
						velit praesentium ipsa quam quas qui explicabo illo consectetur
						repellendus.
					</p>

					<ul className="pricing__list">
						<li className="list__item">
							<FaCheck className="list__icon" />
							<span>Branding & Design</span>
						</li>

						<li className="list__item">
							<FaCheck className="list__icon" />
							<span>Web & App Development</span>
						</li>

						<li className="list__item">
							<FaCheck className="list__icon" />
							<span>Advertising</span>
						</li>

						<li className="list__item">
							<FaCheck className="list__icon" />
							<span>Content Production</span>
						</li>
					</ul>

					<a href="#" className="btn pricing__btn text-cs">
						Free Strategy Call
						<FaArrowRight className="pricing__btn-icon" />
					</a>

					<img src={shapeTwo} alt="" className="shape c__shape" />
				</div>
			</div>

			<div className="section__deco deco__left">
				<img src={shapeOne} alt="" className="shape" />
			</div>

			<div className="section__bg-wrapper">
				<span className="bg__title">Pricing</span>
			</div>
		</section>
	);
};

export default Pricing;

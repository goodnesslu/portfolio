import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import shapeOne from "../../assets/shape-1.png";
import "./blog.css";

const Blog = () => {
	return (
		<section className="blog section" id="blog">
			<h2 className="section__title text-cs">Latest Blog</h2>
			<p className="section__subtitle">
				My <span>Articles</span>
			</p>

			<div className="blog__container container grid">
				<div className="blog__item card card-two">
					<span className="blog__date text-cs">OCOBER 31, 2022</span>
					<h3 className="blog__title">10 Things That Make Your Design Great</h3>
					<p className="blog__description">
						Acheiving awesome design is about understanding what it takes to
						create good work. These are principles that lay a foundation for
						your ability to create. Understanding them will instantly set you
						apart.
					</p>

					<a
						href="https://hashnode.com/@goodnesslu"
						target="_blank"
						className="link"
					>
						Read more
						<FaArrowRight className="link__icon" />
					</a>

					<img src={Blog1} alt="" className="blog__img" />
				</div>

				<div className="blog__item card card-two">
					<span className="blog__date text-cs">DECEMBER 24, 2022</span>
					<h3 className="blog__title">Follow Your Own Design Process</h3>
					<p className="blog__description">
						You don't need to do wireframes to create a successful design, but
						if that is something that helps you communicate - then use it.
						Though it may be tempting to design in high fidelity and get
						something built right away ...
					</p>

					<a
						href="https://hashnode.com/@goodnesslu"
						target="_blank"
						className="link"
					>
						Read more
						<FaArrowRight className="link__icon" />
					</a>

					<img src={Blog2} alt="" className="blog__img" />
				</div>

				<div className="blog__item card card-two">
					<span className="blog__date text-cs">FEBRUARY 17, 2023</span>
					<h3 className="blog__title">Secrets to Create Better Interfaces</h3>
					<p className="blog__description">
						To make a fluid or great interface designs, you have to know the
						secrets the professionals employ. I've analyzed many great
						interfaces and compared them with my industry knowledge about
						designing to come up with ...
					</p>

					<a
						href="https://hashnode.com/@goodnesslu"
						target="_blank"
						className="link"
					>
						Read more
						<FaArrowRight className="link__icon" />
					</a>

					<img src={Blog3} alt="" className="blog__img" />
				</div>
			</div>

			<div className="section__deco deco__right">
				<img src={shapeOne} alt="" className="shape" />
			</div>

			<div className="section__bg-wrapper">
				<span className="bg__title">Blog</span>
			</div>
		</section>
	);
};

export default Blog;

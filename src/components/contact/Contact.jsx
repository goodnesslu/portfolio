import axios from "axios";
import React, { useState } from "react";
import {
	FaAddressBook,
	FaRegEnvelope,
	FaRegMap,
	FaRegUser,
} from "react-icons/fa";

import shapeOne from "../../assets/shape-1.png";
import "./contact.css";

const Contact = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(
				"https://sheet.best/api/sheets/f84d8956-4bf5-492a-911c-08555b97bdbd",
				form
			)
			.then((response) => {
				console.log(response);
				// clearing form fields
				setForm({ name: "", email: "", subject: "", message: "" });
			});
	};

	return (
		<section className="contact section" id="contact">
			<h2 className="section__title text-cs">Contact Me</h2>
			<p className="section__subtitle">
				Let's <span>Talk About Your Project</span>
			</p>

			<div className="contact__container container grid">
				<div className="contact__content">
					<div className="contact__card">
						<span className="contact__card-icon">
							<FaRegMap />
						</span>

						<h3 className="contact__card-title">Address</h3>
						<p className="contact__card-data">Kampala, Uganda</p>
					</div>

					<div className="contact__card">
						<span className="contact__card-icon">
							<FaRegUser />
						</span>

						<h3 className="contact__card-title">Freelance</h3>
						<p className="contact__card-data">Available Right Now</p>
					</div>

					<div className="contact__card">
						<span className="contact__card-icon">
							<FaRegEnvelope />
						</span>

						<h3 className="contact__card-title">Email</h3>
						<p className="contact__card-data">
							<a href="mailto:hello@goodnesslu.com?subject=Hello%Goodness%-Website%20">
								hello@goodnesslu.com
							</a>
						</p>
					</div>

					<div className="contact__card">
						<span className="contact__card-icon">
							<FaAddressBook />
						</span>

						<h3 className="contact__card-title">Phone</h3>
						<p className="contact__card-data">
							<a href="tel:+256785664019">+256 785 664 019</a>
						</p>
					</div>
				</div>

				<form className="contact__form" onSubmit={handleSubmit}>
					<div className="contact__form-group grid">
						<div className="contact__form-div">
							<label className="contact__form-tag text-cs">
								Your full Name <b>*</b>
							</label>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								className="contact__form-input"
							/>
						</div>

						<div className="contact__form-div">
							<label className="contact__form-tag text-cs">
								Your Email <b>*</b>{" "}
							</label>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								className="contact__form-input"
							/>
						</div>
					</div>

					<div className="contact__form-div">
						<label className="contact__form-tag text-cs">
							Your Subject <b>*</b>
						</label>
						<input
							type="text"
							name="subject"
							value={form.subject}
							onChange={handleChange}
							className="contact__form-input"
						/>
					</div>

					<div className="contact__form-div contact__form-area">
						<label className="contact__form-tag text-cs">
							Your Message <b>*</b>
						</label>
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							className="contact__form-input"
						></textarea>
					</div>

					<div className="contact__submit">
						<p>* Accept the terms and conditions.</p>
						<button type="submit" className="btn text-cs">
							Send Message
						</button>
					</div>
				</form>
			</div>

			<div className="section__deco deco__left">
				<img src={shapeOne} alt="" className="shape" />
			</div>

			<div className="section__bg-wrapper">
				<span className="bg__title">Contact Me</span>
			</div>
		</section>
	);
};

export default Contact;

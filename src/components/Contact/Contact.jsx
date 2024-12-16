import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.scss';

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required.'),
        email: Yup.string().email('Invalid email format.').required('Email is required.'),
        message: Yup.string().min(10, 'Message must be at least 10 characters.').required('Message is required.'),
    });

    return (
        <section className="cmp-contact" id="contact">
            <div className="data-container wcl-container">

                <h2 className="data-title">Contact Us</h2>

                <div className="data-row">
                    <div className="data-col">
                        <div className="data-b1">
                            <h3 className="data-b1-title">Get in Touch</h3>

                            <ul className="data-b1-info">
                                <li className="data-b1-info-item">
                                    <span>Phone: </span> <a href="tel:+71234567890">+7 (123) 456-7890</a>
                                </li>

                                <li className="data-b1-info-item">
                                    <span>Email:</span> <a href="mailto:info@company.com">info@company.com</a>
                                </li>

                                <li className="data-b1-info-item">
                                    <span> Address:</span> <a href="https://www.google.com/maps/search/?api=1&query=New+York,+USA" target="_blank" rel="noopener noreferrer">New York, USA</a>
                                </li>
                            </ul>
                        </div>

                        <div className="data-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193493.74697811292!2d-74.2598676!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2e2c4188db%3A0x83f8b7cfdbcf7a5d!2sNew+York,+NY,+USA!5e0!3m2!1sen!2sru!4v1606822655832!5m2!1sen!2sru"
                                width="100%"
                                height="200"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>

                    <div className="data-col">
                        <div className="data-b2">
                            <h3 className="data-b2-title">
                                Request A Quote
                            </h3>

                            <Formik
                                initialValues={{ name: '', email: '', message: '' }}
                                validationSchema={validationSchema}
                                onSubmit={(values, { resetForm }) => {
                                    console.log(values);
                                    setSuccessMessage('Your message was sent successfully!');
                                    resetForm();
                                    setTimeout(() => setSuccessMessage(''), 3000);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="contact-form">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <Field
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Your Name"
                                                className="input-field"
                                            />
                                            <ErrorMessage name="name" component="div" className="error-message" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Your Email"
                                                className="input-field"
                                            />
                                            <ErrorMessage name="email" component="div" className="error-message" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <Field
                                                as="textarea"
                                                id="message"
                                                name="message"
                                                rows="4"
                                                placeholder="Your Message"
                                                className="input-field"
                                            />
                                            <ErrorMessage name="message" component="div" className="error-message" />
                                        </div>

                                        <button type="submit" className="submit-button" disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </Form>
                                )}
                            </Formik>

                            {/* Success Message */}
                            {successMessage && (
                                <div className="success-message">
                                    {successMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

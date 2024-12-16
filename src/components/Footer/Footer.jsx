import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Footer.scss';

const Footer = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const onSubmit = async (data) => {
        setLoading(true);
        setMessage('');

        // Эмуляция отправки данных с задержкой
        try {
            // Имитация задержки для отправки данных (например, запрос на сервер)
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // После успешной отправки
            setMessage('Thank you for subscribing! We will keep you updated.');
            reset(); // Очищаем форму после успешной отправки
        } catch (error) {
            setMessage('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Очищаем сообщение при вводе в поле
    const handleInputChange = () => {
        if (message) {
            setMessage('');
        }
    };

    return (
        <footer className="sct-footer" id="wcl-main-footer">
            <div className="data-container wcl-container">
                <div className="data-row">
                    <div className="data-col">
                        <div className="data-logo">
                            <a href="http://dev.wp-blog">
                                Space Production
                            </a>
                        </div>

                        <div className="data-desc">
                            Innovating the Future with Gravity-Defying Possibilities!
                        </div>
                    </div>

                    <div className="data-col">
                        <div className="data-widget">
                            <h3 className="data-widget-title">Navigation</h3>

                            <ul id="menu-menu-2" className="data-menu">
                                <li className="menu-item"><a href="http://dev.wp-blog/">Home</a></li>
                                <li className="menu-item"><a href="http://dev.wp-blog/categories/">Categories</a></li>
                                <li className="menu-item"><a href="http://dev.wp-blog/blog/">Blog</a></li>
                                <li className="menu-item"><a href="http://dev.wp-blog/sample-page/">Sample Page</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="data-col">
                        <div className="data-widget">
                            <h3 className="data-widget-title">Subscribe to news</h3>

                            <div className="data-widget-subtitle">
                                Subscribe to our newsletter to receive the latest news.
                            </div>

                            <div className="cmp-search-popup">

                                <form onSubmit={handleSubmit(onSubmit)} className="search-form">
                                    <div className="cmp-inner">
                                        <input
                                            type="email"
                                            className="search-field"
                                            placeholder="Enter email"
                                            {...register('email', {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            onChange={handleInputChange} // Очистка сообщения при вводе
                                        />

                                        <button type="submit" className="search-submit cmp-button" disabled={loading}>
                                            {loading ? 'Subscribing...' : 'Subscribe'}
                                        </button>
                                    </div>

                                    {errors.email && <p className="cmp-note error-message">{errors.email.message}</p>}

                                    {message && <p className="cmp-note success-message">{message}</p>}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="data-copyright">
                    <div className="data-copyright-text">© 2024 Blog.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

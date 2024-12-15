// Footer.js
import React from 'react';
import './Footer.scss';

const Footer = () => {
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
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-43 current_page_item menu-item-55">
                                    <a href="http://dev.wp-blog/" aria-current="page">Home</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
                                    <a href="http://dev.wp-blog/categories/">Categories</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-183">
                                    <a href="http://dev.wp-blog/blog/">Blog</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                                    <a href="http://dev.wp-blog/sample-page/">Sample Page</a>
                                </li>
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
                                <form role="search" method="get" className="search-form" action="/">
                                    <input
                                        type="email"
                                        className="search-field"
                                        placeholder="Enter email"
                                        name="email"
                                        required
                                    />

                                    <button type="submit" className="search-submit cmp-button">
                                        Subscribe
                                    </button>
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

import React, { useState, useEffect } from 'react';
import './Header.scss';
import { scroller } from 'react-scroll';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            smooth: true
        });


        if (document.documentElement.classList.contains('overflow-hidden')) {
            document.documentElement.classList.remove('overflow-hidden');
            document.querySelector('.cmp-3-header .cmp3-nav.active').classList.remove('active')
            document.querySelector('.cmp3-burger').classList.remove('active');
            document.querySelector('.cmp3-burger img').src = '/images/header-menu-btn.svg';
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSubMenu = (index) => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.documentElement.classList.add('overflow-hidden');
        } else {
            document.documentElement.classList.remove('overflow-hidden');
        }

        return () => {
            document.documentElement.classList.remove('overflow-hidden');
        };
    }, [menuOpen]);

    return (
        <header className="cmp-3-header">
            <div className="cmp3-logo">
                <a href="/">Space Production</a>
            </div>

            <nav className={`cmp3-nav ${menuOpen ? 'active' : ''}`}>
                <ul className="cmp3-menu">
                    <li className="menu-item">
                        <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                    </li>
                    <li className={`menu-item-has-children ${openSubMenuIndex === 0 ? 'active' : ''}`}>
                        <a href="#services" onClick={() => toggleSubMenu(0)}>Services</a>
                        <ul className={`sub-menu ${openSubMenuIndex === 0 ? 'active' : ''}`}>
                            <li><a href="#development" onClick={() => scrollToSection('development')}>Development</a></li>
                            <li><a href="#construction" onClick={() => scrollToSection('construction')}>Construction</a></li>
                            <li><a href="#property-management" onClick={() => scrollToSection('property-management')}>Property Management</a></li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
                    </li>
                </ul>
            </nav>

            <div className={`cmp3-burger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <img
                    src={menuOpen ? '/images/header-menu-btn-close.svg' : '/images/header-menu-btn.svg'}
                    alt="Menu Button"
                />
            </div>
        </header>
    );
};

export default Header;

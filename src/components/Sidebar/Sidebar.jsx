import React, { useState } from 'react'
import styles from './Sidebar.module.css';
import PropTypes from 'prop-types';
import { handleSmoothScroll, useActiveSection } from '../../helpers/ActiveSection';

function Sidebar({closeSidebar}) {
    const sections = [
        'home-main-container',
        'about-main-container',
        'project-main-container',
        'achievement-main-container',
        'techtools-main-container',
        'contact-main-container'
    ];

    const activeLink = useActiveSection(sections, 150);
    const [, setActiveLink] = useState(activeLink);

    const links = [
        {href: '#home-main-container', label: 'Home'},
        {href: '#about-main-container', label: 'About'},
        {href: '#project-main-container', label: 'Projects'},
        {href: '#achievement-main-container', label: 'Achievements'},
        {href: '#techtools-main-container', label: 'TechTools'},
        {href: '#contact-main-container', label: 'Contact'},
    ];

  return (
    <div className={styles.sidebar}>
        <div className={styles.xTimeIcon} onClick={closeSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </div>
        <div className={styles.sidebarNav}>
            {
                links.map((link) => (
                    <a
                    key={link.href}
                    href={link.href}
                    className={`${styles.sidebarNavLink} ${activeLink === link.href ? styles.active : ''}`}
                    onClick={(e) => handleSmoothScroll(e, link.href.substring(1), setActiveLink)}
                    >
                        {link.label}
                    </a>
                ))
            }
        </div>
    </div>
  )
}

Sidebar.propTypes = {
    closeSidebar: PropTypes.func.isRequired,
};

export default Sidebar
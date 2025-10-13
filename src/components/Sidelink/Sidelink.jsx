import React, { useState } from 'react'
import styles from './Sidelink.module.css';
import { aboutWhite, achievementWhite, contactWhite, homeWhite, projectWhite, techtoolsWhite } from '../../assets';
import { Link } from 'react-router-dom';
import { handleSmoothScroll, useActiveSection } from '../../helpers/ActiveSection';

function Sidelink() {
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
        {href: '#home-main-container', icon: homeWhite, label: 'Home'},
        {href: '#about-main-container', icon: aboutWhite, label: 'About'},
        {href: '#project-main-container', icon: projectWhite, label: 'Projects'},
        {href: '#achievement-main-container', icon: achievementWhite, label: 'Achievements'},
        {href: '#techtools-main-container', icon: techtoolsWhite, label: 'TechTools'},
        {href: '#contact-main-container', icon: contactWhite, label: 'Contact'},
    ];

  return (
    <div className={styles.sidelink}>
        {
            links.map(link => (
                <div className={styles.sidelinkWrapper} key={link.href}>
                    <Link 
                    to={link.href} 
                    className={`${styles.sidelinkCircle} ${activeLink === link.href ? styles.active : ''}`}
                    onClick={(e) => handleSmoothScroll(e, link.href.substring(1), setActiveLink)}
                    >
                        <img src={link.icon} alt={`${link.label} Icon`} className={styles.sidelinkIcon} />
                    </Link>
                    <span className={styles.tooltip}>{link.label}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Sidelink
import { useEffect, useState } from 'react';

export const useActiveSection = (sections, bottomThreshold = 150) => {
    const [activeLink, setActiveLink] = useState(`#${sections[0]}`);

    useEffect(() => {
        const handleScrollDetection = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (window.scrollY + windowHeight >= documentHeight - bottomThreshold) {
                setActiveLink(`#${sections[sections.length - 1]}`);
                return;
            }

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const sectionTop = rect.top + window.scrollY;
                    const sectionBottom = sectionTop + rect.height;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveLink(`#${sections[i]}`);
                        break;
                    }
                }
            }
        };

        handleScrollDetection();

        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScrollDetection();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, [sections, bottomThreshold]);

    return activeLink;
};

export const handleSmoothScroll = (e, targetId, setActiveLink) => {
    e.preventDefault();
    setActiveLink(`#${targetId}`);
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
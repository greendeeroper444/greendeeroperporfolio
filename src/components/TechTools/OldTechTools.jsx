import React, { useEffect } from 'react'
import { androidstudio, apachenetbeans, arduino, csharp, dart, electronjs, figma, flutter, java, laragon, laravel, mysql, netcore, php, postman, pycharm, python, r, rstudio, sass, sublime, tailwind, vscode, workbench, xampp, } from '../../assets';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './TechTools.module.css';

function OldTechTools() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if(inView){
            controls.start('visible');
        } else{
            controls.start('hidden');
        }
    }, [controls, inView]);

    const leftVariants = {
        hidden: { 
            opacity: 0, 
            x: -100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: {duration: 0.5} 
        },
    };

    const rightVariants = {
        hidden: { 
            opacity: 0, 
            x: 100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: {duration: 0.5} 
        },
    };

    const topVariants = {
        hidden: { 
            opacity: 0, 
            y: -100 
        },
        visible: {
            opacity: 1, 
            y: 0, 
            transition: {duration: 0.5} 
        },
    };

    const bottomVariants = {
        hidden: { 
            opacity: 0, 
            y: 100 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: {duration: 0.5} 
        },
    };


  return (
    <motion.div className={styles.techIcons}
    ref={ref}
    initial='hidden'
    animate={controls}
    variants={{
        hidden: {},
        visible: {transition: {staggerChildren: 0.2}},
    }}
    >

        <motion.div className={styles.techIcon} variants={leftVariants}><img src={php} alt="PHP" loading='lazy' /><span>PHP</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={flutter} alt="Flutter" loading='lazy' /><span>Flutter</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={dart} alt="Dart" loading='lazy' /><span>Dart</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={sass} alt="Sass" loading='lazy' /><span>SASS</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={electronjs} alt="ElectronJS" loading='lazy' /><span>ElectronJS</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={netcore} alt="Netcore" loading='lazy' /><span>.Net Core</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={csharp} alt="Csharp" loading='lazy' /><span>C#</span></motion.div>
        <motion.div className={styles.techIcon} variants={rightVariants}><img src={java} alt="Java" loading='lazy' /><span>Java</span></motion.div>
        <motion.div className={styles.techIcon} variants={leftVariants}><img src={python} alt="Python" loading='lazy' /><span>Python</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={vscode} alt="VS Code" loading='lazy' /><span>VS Code</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={sublime} alt="Sublime Text" loading='lazy' /><span>Sublime Text</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={xampp} alt="Xampp" loading='lazy' /><span>Xampp</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={laragon} alt="Laragon" loading='lazy' /><span>Laragon</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={androidstudio} alt="Android Studio" loading='lazy' /><span>Android Studio</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={pycharm} alt="PyCharm" loading='lazy' /><span>PyCharm</span></motion.div>
        <motion.div className={styles.techIcon} variants={rightVariants}><img src={mysql} alt="MySql" loading='lazy' /><span>MySql</span></motion.div>
        <motion.div className={styles.techIcon} variants={leftVariants}><img src={workbench} alt="Workbench" loading='lazy' /><span>Workbench</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={postman} alt="Post Man" loading='lazy' /><span>Post Man</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={apachenetbeans} alt="Apache NetBeans" loading='lazy' /><span>Apache NetBeans</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={r} alt="R" loading='lazy' /><span>R</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={rstudio} alt="R Studio" loading='lazy' /><span>R Studio</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={arduino} alt="Arduino" loading='lazy' /><span>Arduino</span></motion.div>
        <motion.div className={styles.techIcon} variants={rightVariants}><img src={figma} alt="Figma" loading='lazy' /><span>Figma</span></motion.div>
    </motion.div>
  )
}

export default OldTechTools
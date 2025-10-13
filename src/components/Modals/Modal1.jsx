import React from 'react'
import PropTypes from 'prop-types';
import styles from './Modals.module.css';
import { TfiAngleLeft,TfiAngleRight } from "react-icons/tfi";

function Modal1({image, onClose, onNext, onPrev}) {
    if(!image) return null;

  return (
    <div className={styles.projectModalContainer} onClick={onClose}>
        <div className={styles.projectModalContent} onClick={e => e.stopPropagation()}>
           <button className={`${styles.navButton} ${styles.prevButton}`} onClick={onPrev}>
                <TfiAngleLeft size={40} />
            </button>
            <img src={image.imageUrl} alt={image.title} className={styles.zoomedImage} />
            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={onNext}>
                <TfiAngleRight size={40} />
            </button>
        </div>
    </div>
  )
}
Modal1.propTypes = {
    image: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string
    }),
    onClose: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
};

export default Modal1
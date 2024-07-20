import { useState, ReactNode } from 'react';
import styles from '../styles/HoverText.module.css';

interface HoverTextProps {
    icon: ReactNode;
    text: string;
}

const HoverText = ({ icon, text }: HoverTextProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.icon}>{icon}</div>
            {isHovered && <div className={styles.text}>{text}</div>}
        </div>
    );
};

export default HoverText;

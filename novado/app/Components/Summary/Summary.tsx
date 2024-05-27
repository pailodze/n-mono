import styles from './Summary.module.scss';

const Summary = () => {
    return (
        <div className={styles.container}>
            <div className={styles.active}>დავალებები <span>5</span></div>
            <div className={styles.done}>დასრულებული <span>2 / 5</span></div>
        </div>
    )
}

export default Summary;
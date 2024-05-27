import Image from "next/image";
import styles from './Empty.module.scss';

const Empty = () => {
    return (
        <div className={styles.container}>
            <Image src='/Clipboard.svg' width={56} height={56} alt="clipboard" />
            <div className={styles.infoWrapper}>
                <h2>დავალებები ჯერ არ გაქვთ</h2>
                <span>
                    შექმენით დავალებები
                    და დაიწყეთ თქვენი ცხოვრების დაორგანიზება
                    ჩვენთან ერთად
                </span>
            </div>
        </div>
    )
}

export default Empty;
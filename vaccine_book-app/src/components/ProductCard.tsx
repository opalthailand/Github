import styles from './productcard.module.css'
import Image from 'next/image';

export default function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/card1.jpg'}
                alt='Product Picture'
                fill={true}
                objectFit='cover'
                />
            </div>
            วัคซีนคือสารที่ใช้กระตุ้นระบบภูมิคุ้มกันในร่างกายเพื่อป้องกันการติดเชื้อโรคต่าง ๆ โดยการสร้างภูมิคุ้มกันก่อนว่าเมื่อถูกเชื้อโรคเข้ามาในอนาคต ร่างกายจะสามารถต่อสู้และป้องกันการเกิดโรคได้มากขึ้น เวชศาสตร์ได้พัฒนาวัคซีนเพื่อป้องกันโรคต่าง ๆ เช่น โควิด-19, ไข้หวัดใหญ่ 
            <div className={styles.cardtext}/>
        </div>
    );
}
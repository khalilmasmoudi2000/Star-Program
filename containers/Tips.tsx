import React from 'react';
import styles from '@/app/index';
import { TipL, TipR } from '@/components';
import Water from '@/public/Water.png';
import Sleep from '@/public/Sleep.png';
import Fit from '@/public/Fit.png';
import Food from '@/public/Food.png';
import Sport from '@/public/Sport.png';
import Relax from '@/public/Relax.png';
import Diagnosis from '@/public/Diagnosis.png';
import Skin from '@/public/Skin.png';
import Social from '@/public/Social.png';

const Tips = () => {
    return (
        <div className={styles.tipsContainer}>
            <TipR image={Food} title="Eat healthy meals" description="Choose a variety of balanced foods that include fruits, vegetables, and whole grains. Reduce the consumption of saturated fats and added sugars." />
            <TipL image={Water} title="Drink enough water" description="It is recommended to drink 8 cups of water daily to maintain good health." />
            <TipR image={Fit} title="Maintain a healthy weight" description="Try to maintain a healthy weight by eating a balanced diet and exercising regularly." />
            <TipL image={Sport} title="Exercise regularly" description="Engage in regular physical activities such as walking, cycling, or exercise to improve physical fitness." />
            <TipR image={Diagnosis} title="Regular health check-up" description="Make regular visits to the doctor for routine and necessary medical examinations." />
            <TipL image={Sleep} title="Good sleep" description="Make sure to get enough good sleep to avoid fatigue and promote overall health." />
            <TipR image={Relax} title="Stress management" description="Learn stress management techniques such as meditation and deep breathing to maintain mental well-being." />
            <TipL image={Skin} title="Skin care with creams and oils" description="I use skincare products containing creams and oils that suit my skin type, whether oily, combination, or dry." />
            <TipR image={Social} title="Social communication" description="Maintain healthy social relationships and stay in touch with your friends and family." />
        </div>
    );
};

export default Tips;

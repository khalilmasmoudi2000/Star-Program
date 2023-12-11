import React from 'react';
import styles from '@/app/index';
import { TipL, TipR } from '@/components';
import Water from '@/public/Water.png';
import Sleep from '@/public/Sleep.png';
import Fit from '@/public/Fit.png';
import Food from '@/public/Food.png';
import Sport from '@/public/Sport.png';

const Tips = () => {
    return (
        <div className={styles.tipsContainer}>
            <TipR image={Food} title="Eat healthy meals" description="Choose a variety of balanced foods that include fruits, vegetables, and whole grains. Reduce the consumption of saturated fats and added sugars." />
            <TipL image={Water} title="Drink enough water" description="It is recommended to drink 8 cups of water daily to maintain good health." />
            <TipR image={Sport} title="Exercise regularly" description="Engage in regular physical activities such as walking, cycling, or exercise to improve physical fitness." />
            <TipL image={Fit} title="Maintain a healthy weight" description="Try to maintain a healthy weight by eating a balanced diet and exercising regularly." />
            <TipR image={Sleep} title="Good sleep" description="Make sure to get enough good sleep to avoid fatigue and promote overall health." />
        </div>
    );
};

export default Tips;

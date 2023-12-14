import React from 'react';
import styles from '@/app/index';
import { Story } from '@/components';
import Eya from '@/public/Eya.png';
import Narjes from '@/public/Narjes.png';
import Noura from '@/public/Noura.png';
import Ons from '@/public/Ons.png';
import Ameni from '@/public/Ameni.png';

const Stories = () => {
    return (
        <div className={styles.storiesContainer}>
            <Story image={Eya} title="Ayah Al-Saif" description="Recipient of the title of the best female leader in the world presented by the G8 organization in London, Ayah Al-Saif has started to pursue her dream by establishing a project for collecting and recycling wooden waste, which she obtained from the residents of the Tunisian forests. She has begun to implement her project, which is the molded wooden carriers, and it has been a tremendous success." />
            <Story image={Narjes} title="Narjes El-Yaser" description="From the state of Medenine, Narjes is a young agricultural engineer who recently obtained the medal of excellence in the Tunisian competition for local products organized by the agency, with a honey product that she was able to promote through social media." />
            <Story image={Noura} title="Noura Katri" description="Her story with the agriculture field started in 2005 after the death of her father and her need to interrupt her studies to support her elderly mother. Despite facing numerous difficulties, including the rigid mentality that farming is reserved for men, today she owns a farm worth over 600,000 dinars, providing 12 job opportunities. The farm spans 25 hectares of agricultural land, divided into 10 specialties. What contributed to her success was her commitment to attending dozens of training courses in various fields, including her most recent one in cheese production in France. This enabled her to lead a team of 50 farmers in a project supported by the Sers Farming Association. " />
            <Story image={Ameni} title="Ameni Riahi" description="A young Tunisian agricultural engineer woman who chose to invest in agriculture because she loved this field and believed in its prospects. That's why, she decided to acquire an agricultural land in the state of Siliana and to focus on planting fruit trees and large-scale farming. Alongside managing her farm, Amani provides support and guidance to young investors and farmers in the region, as she is a specialized advisor in initiating projects and managing agricultural properties, and the owner of a consulting office in the state of Siliana. She faced many difficulties, the most severe of which was the difficulty of accessing financing, and despite that, she did not despair. She is not one to give in or succumb to the first of the difficulties. She excelled in perseverance, never giving up on her dream, and continued steadily in her professional career." />
            <Story image={Ons} title="Ons Alia" description="With a degree in biology engineering, Ons is known for her love of nature and passion for agriculture. She moved into the field of entrepreneurship and innovation, creating a unique and innovative method focused on developing a sustainable agricultural farm in the state of Zaghouan called 'Tamazight'. She currently works in the agricultural enterprise incubator in Mokren and aspires to develop her agricultural farm and attract lovers of Berber heritage and eco-tourism. Ons is considered a role model for Tunisian youth who are persevering and enthusiastic in the field of agriculture." />
        </div>
    );
};

export default Stories;

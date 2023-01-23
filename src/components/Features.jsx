import styles from '../styles/global';
import assets from '../assets';

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt={iconText} className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

export default function Features() {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology,{' '}
            <em className='font-bold'>React Native</em>.
          </p>
        </div>
          <div className={styles.flexWrap}>
            <FeatureCard iconUrl={assets.react} iconText='React Native' />
            <FeatureCard iconUrl={assets.javascript} iconText='JavaScript' />
          </div>
      </div>
    </div>
  );
}


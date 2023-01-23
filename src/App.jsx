import { SectionWrapper, Download, Features } from './components';
import assets from './assets';
import styles from './styles/global';

function App() {
  return (
    <>
      <header>
        <SectionWrapper
          title='Your one-stop store of Nifty NFTs. Sell & Grow'
          description='Buy, store, collect NFTs, exchange & earn crypto. Join 27+ million people using ProNef Marketplace.'
          showBtn
          mockupImg={assets.homeHero}
          banner='banner'
        />
      </header>

      <SectionWrapper
        title='Smart User Interface Marketplace'
        description='Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design.'
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title='Deployment'
        description='ProNef is built using Expo which runs natively on all mobile devices. You can easily get the app running on your Apple iOS or Android devices by downloading it from the corresponding app store for your device, Apple Store or Google Play Store.'
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title='User Interface and Layout'
        description='The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT.'
        mockupImg={assets.mockup}
        banner='banner02'
      />

      <Download />

      <footer className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <strong className={`${styles.blackText} font-bold`}>niranad</strong>
        </p>
      </footer>
    </>
  );
}

export default App;

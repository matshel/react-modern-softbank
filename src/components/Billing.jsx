import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    {/* left */}
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt='billing'
        className='w-[100%] h-[100%] relative z-5'
      />
      {/* gradient start */}
      <div className='absolute top-0 w-[50%] h-[50%] z-[3] -left-1/2 rounded-full white__gradient ' />
      <div className='absolute bottom-20 w-[50%] h-[50%] z-[0] -left-1/2 rounded-full pink__gradient ' />
      {/* gradient end */}
    </div>
    {/* right */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className='sm:block hidden' /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className='flex flex-row flex-grow sm:mt-10 mt-6'>
        <a href='https://www.google.com'>
          <img
            src={google}
            alt='google_play'
            className='w-[128px] h-[42px] object-contain'
          />
        </a>
        <a href='https://www.apple.com'>
          <img
            src={apple}
            alt='apple_store'
            className='w-[128px] h-[42px] object-contain'
          />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;

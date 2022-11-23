import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    {/* left */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better deal <br className='sm:block hidden' /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum inventore
        magni sit, eligendi consectetur tenetur ut quaerat voluptates eos id
        maiores repellat facere at expedita molestiae accusantium distinctio in
        accusamus!
      </p>
      <Button styles='mt-10' />
    </div>
    {/* right */}
    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%]' />
    </div>
  </section>
);

export default CardDeal;

import Description from "./Description";
import Header from "./Header";

const Hero = ({ data }) => {
  return (
    <div style={{ position: "relative" }}>
      {/* <div className={styles.wave}></div> */}
      <Header />

      <Description data={data} />
    </div>
  );
};

export default Hero;

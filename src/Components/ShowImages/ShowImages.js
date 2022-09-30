//traer las imagenes
import one from "../../img/one.png";
import two from "../../img/two.png";
import three from "../../img/three.png";
import four from "../../img/four.png";
import five from "../../img/five.png";
import six from "../../img/six.png";

export default function ShowImages({ roll }) {
  const images = () => {
    if (roll === 1) {
      return <img src={one} alt="lado1" />;
    }
    if (roll === 2) {
      return <img src={two} alt="lado2" />;
    }
    if (roll === 3) {
      return <img src={three} alt="lado3" />;
    }
    if (roll === 4) {
      return <img src={four} alt="lado4" />;
    }
    if (roll === 5) {
      return <img src={five} alt="lado5" />;
    }
    if (roll === 6) {
      return <img src={six} alt="lado6" />;
    }
  };

  return <div>{images()}</div>;
}

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/slide-1.jpg";
import img2 from "../../../assets/slide-2.jpg";
import img3 from "../../../assets/slide-3.jpg";
import img4 from "../../../assets/slide-4.jpg";
import img5 from "../../../assets/slide-5.jpg";

const Slider = () => {
  return (
    <Carousel className="max-h-[750px] container mx-auto">
      <div>
        <img className="" src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
    </Carousel>
  );
};

export default Slider;

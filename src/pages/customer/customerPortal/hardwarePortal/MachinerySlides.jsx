import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AllMachineryProducts from "../../../../data/AllMachineryEquipment"; // Importing all products data

const MachinerySlides = () => {
    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };
  
    const images = AllMachineryProducts.map((product) => product.imgSrc);
    const firstFourImages = images.slice(0, 5); // Get the first 5 images
  
    return (
      <div className="w-full h-full">
        <Carousel
          responsive={responsive}
          infinite
          // autoPlay
          autoPlaySpeed={3000}
          // pauseOnHover
          showDots={false}
          swipeable
          draggable
          keyBoardControl
          className="w-full h-full rounded-lg"
        >
          {firstFourImages.map((src, index) => (
            <div key={index} className="w-full h-full rounded-2xl">
              <img src={src} alt={`slide-${index}`} className="w-full h-full object-contain rounded-lg" />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };
  
export default MachinerySlides;
   
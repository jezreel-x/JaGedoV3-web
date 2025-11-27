import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AllHardwareProducts from "../../../../data/AllHardware"; // Importing all products data


const HomeSlide = () => {
  const images = AllHardwareProducts.map((product) => product.image);
  const firstFewImages = images.slice(0, 5); // Get the first 5 images
  // Responsive settings for the carousel
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // Array of images with corresponding titles
  /*
  const slides = [
    {
      src: "https://media.istockphoto.com/id/836219748/photo/set-of-construction-materials.jpg?s=170667a&w=is&k=20&c=Gxl9J_bIeNdMsT6zbk2n4K67kyEaNwu8WTKRRHO1F8Q=",
      title: "Hardware.",
    },
    {
      src: "https://opaltrading.com/wp-content/uploads/2021/12/hardware-1160343256.jpg",
      title: "Custom Products",
    },
    {
      src: "https://content.jdmagicbox.com/comp/janjgir-champa/w3/9999p7817.7817.130714170035.a3w3/catalogue/prince-machinery-and-hardware-janjgir-janjgir-champa-hardware-shops-b682rz609w.jpg",
      title: "Hire Equipments and Machinery",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/1142/1104/products/7093-Main-Image-front_2000x.jpg?v=1633906387",
      title: "Design",
    },
   
  ];
  */

  return (
    <div className="relative pb-10">
      <Carousel
        responsive={responsive}
        infinite
        // autoPlay
        autoPlaySpeed={3000}
        // pauseOnHover
        showDots
        swipeable
        draggable
        keyBoardControl
        className="w-[350px] mx-auto"
      >
        {firstFewImages.map((slide, index) => (
          <div key={index} className="relative h-[350px] flex items-center justify-center">
            {/* Background Image */}
            <img src={slide} alt={`slide-${index + 1}`} className="h-[300px] w-[350px] object-cover rounded-lg shadow-lg" />

            {/* Title Overlay */}
            {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[rgb(0,0,122)] bg-opacity-60 text-white text-xl font-semibold px-6 py-3 rounded">
              {slide.title}
            </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSlide;

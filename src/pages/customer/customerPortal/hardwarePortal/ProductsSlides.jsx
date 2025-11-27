import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AllProducts from "../../../../data/AllCustoms"; // Importing all products data

const ProductsSlides = () => {
    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };
  
    const images = AllProducts.map((product) => product.image);
    const firstFiveImages = images.slice(0, 5); // Get the first 5 images
    // Example images array
    /*
    const images = [
      "https://media.istockphoto.com/id/1448349078/photo/cement-bags-o-sacks-isolated-on-white.jpg?s=612x612&w=0&k=20&c=F5_VosP_qf9xYgyVth-Vs3OsSjaL0gZBMae39zZ3Zmg=",
      "https://imprintlogo.com/images/products/custom-printed-novelty-child-size-construction-hats_25696_FB.jpg",
      "https://dcmerrett.co.uk/wp-content/uploads/2024/01/dc-merrett-1-.jpg",
      "https://www.home-designing.com/wp-content/uploads/2014/07/free-3-bedroom-house-plans.jpeg",
    //   "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    ];
    */
  
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
          {firstFiveImages.map((src, index) => (
            <div key={index} className="w-full h-full rounded-2xl">
              <img src={src} alt={`slide-${index}`} className="w-full h-full object-contain rounded-lg" />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };
  
  export default ProductsSlides;
   
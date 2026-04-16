import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { COLORS } from "../constants";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1658235081452-c2ded30b8d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGRpcGxvbWF8ZW58MXx8fHwxNzc2MzIyNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Diplomaturas Acreditadas",
    description: "Títulos reconocidos a nivel nacional",
  },
  {
    url: "https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcHJvZmVzc2lvbmFsJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzc2MzIyNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Formación Continua",
    description: "Actualizate con los mejores profesionales",
  },
  {
    url: "https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGJvb2tzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc2MzIyNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Contenido Actualizado",
    description: "Material didáctico de excelencia académica",
  },
];

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: false,
  };

  return (
    <section className={`py-12 sm:py-16 ${COLORS.section.primary}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings} className="carousel-container">
          {carouselImages.map((image, index) => (
            <div key={index} className="outline-none">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mx-2">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 ${COLORS.text.white}`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    {image.title}
                  </h3>
                  <p
                    className={`text-base sm:text-lg ${COLORS.text.carouselCaption}`}
                  >
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

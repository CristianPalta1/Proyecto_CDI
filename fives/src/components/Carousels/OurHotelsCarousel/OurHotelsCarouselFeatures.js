//Constantes encargada de construir las flechas para el control manual del carousel.

export const ArrowLeft = ({ onClick, ...rest }) => {
  const arrowLeft = '/resourses/assets/prev_arrow.svg';

  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={() => handleClick()} className="carousel-button-left">
      <span className="arrow_content_prev">
        <img src={arrowLeft} alt="arrow_prev" />
      </span>
    </button>
  );
};

export const ArrowRigth = ({ onClick, ...rest }) => {
  const arrowRigth = '/resourses/assets/next_arrow.svg';
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  const handleClick = () => {
    onClick();
  };
  return (
    <button onClick={() => handleClick()} className="carousel-button-right">
      <span className="arrow_content_next">
        <img src={arrowRigth} alt="arrow_next" />
      </span>
    </button>
  );
};

//Breakpoints para los diferentes devices.
export const responsiveHome = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1.5,
    slidesToSlide: 1.5, // optional, default to 1.
    partialVisibilityGutter: 240,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export const responsiveSpecialOffers = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 85
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const residencesResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    // partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const residencesAtResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export const residencesAtResponsiveResidences = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const ourHighlightsResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 568 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 568, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const EventsResponsive = {

  largeDesktop: {
    breakpoint: { max: 4000, min: 3000},
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter : 240,
  },
  tablet: {
    breakpoint: { max: 1024, min: 568 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 568, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0
  },
};

export const RewardsResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 568 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 568, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

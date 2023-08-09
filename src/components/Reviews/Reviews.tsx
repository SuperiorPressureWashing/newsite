import "./reviews.css"
import reviewData from "./review_data"
import Review from "./Review"
import Carousel from "react-multi-carousel"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const reviewElems = reviewData.map((data, i)=>{
    return(
        <Review key={i} {...data}/>
    )
})

export default function Reviews() {



  return (
    <div id="reviewsWrapper">
        <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        arrows={false}
        >
            {reviewElems}
        </Carousel>
        <div  id="reviewLink">
        <a target="_blank" href="https://goo.gl/maps/XAsnvw8bCVJYksbMA">Leave a review!</a>
        </div>
        
    </div>
  )
}

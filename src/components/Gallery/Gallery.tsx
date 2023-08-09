import "./gallery.css"
import galleryData from "./galleryData"
import Carousel from "react-multi-carousel"

const responsive = {
    any: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
      },
}

export default function Gallery() {

    const imageElems = galleryData.map((data, i)=>{
        return <img className="gallery-img" src={data.src} alt={data.title} key={i} />
    })

  return (
    <div id="galleryWrapper">
        <h1>See the <span>difference!</span></h1>
        <Carousel
        showDots={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        >
            {imageElems}
        </Carousel>
    </div>
  )
}

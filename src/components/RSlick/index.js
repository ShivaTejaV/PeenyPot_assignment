import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './index.css'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  appendDots: dots => (
    <div
      style={{
        backgroundColor: 'transparent',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <ul style={{marginRight: '50px'}}> {dots} </ul>
    </div>
  ),
  customPaging: () => (
    <div
      style={{
        width: '30px',
        color: 'white',
      }}
    >
      O
    </div>
  ),
}

const RSlick = () => (
  <>
    <Slider {...settings} className="slider">
      <div className="slide">
        <h3>
          Mastering Your Finances: Expert tips and tricks to achieve your
          financial goals
        </h3>
        <p>File Name*|2 Minute Read</p>
        <button type="button" className="button1">
          Read Now
        </button>
      </div>
      <div className="slide">
        <h3>Slide 2 Heading</h3>
        <p>Slide 2 Description</p>
        <button type="button" className="button1">
          Read Now
        </button>
      </div>
      <div className="slide">
        <h3>Slide 3 Heading</h3>
        <p>Slide 3 Description</p>
        <button type="button" className="button1">
          Read Now
        </button>
      </div>
      <div className="slide">
        <h3>Slide 4 Heading</h3>
        <p>Slide 4 Description</p>
        <button type="button" className="button1">
          Read Now
        </button>
      </div>
      <div className="slide">
        <h3>Slide 5 Heading</h3>
        <p>Slide 5 Description</p>
        <button type="button" className="button1">
          Read Now
        </button>
      </div>
    </Slider>
  </>
)

export default RSlick

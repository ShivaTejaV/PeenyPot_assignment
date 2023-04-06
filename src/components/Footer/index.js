import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="top">
      <img
        alt="footer-logo"
        src="https://res.cloudinary.com/dngrmtiw7/image/upload/v1680606836/PennyPot_Project/footer_logo_1_esq73x.jpg"
        className="footer-logo"
      />
    </div>
    <div className="mid">
      <div className="mid-item">
        <img
          className="footer-logo-2"
          alt=""
          src="https://res.cloudinary.com/dngrmtiw7/image/upload/v1680608056/PennyPot_Project/footer_logo_3_j1gy0x.jpg"
        />
        <p>Join the revolution and see how easy</p>
        <p>Middle makes home loans</p>
      </div>
      <div className="mid-item">
        <h1>Company</h1>
        <p>contact</p>
      </div>
      <div className="mid-item">
        <h1>Who we help</h1>
        <p>Customers</p>
        <p>Brokers</p>
        <p>Lenders</p>
      </div>
      <div className="mid-item">
        <h1>Follow us on</h1>
        <div className="social-icons">
          <img
            alt="facebook-icon"
            className="icon"
            src="https://res.cloudinary.com/dngrmtiw7/image/upload/v1680611802/PennyPot_Project/Social_Icons/icons8-facebook-circled-192_mlw6l1.png"
          />
          <img
            alt="twiitter-icon"
            className="icon twitter-icon"
            src="https://res.cloudinary.com/dngrmtiw7/image/upload/v1680611802/PennyPot_Project/Social_Icons/icons8-twitter-circled-240_saku0u.png"
          />
          <img
            alt="youtube-icon"
            className="icon youtube-icon"
            src="https://res.cloudinary.com/dngrmtiw7/image/upload/v1680612359/PennyPot_Project/Social_Icons/youtube_gnd9sv.jpg"
          />
          <img
            alt="linkedin-icon"
            className="icon"
            src="https://res.cloudinary.com/dngrmtiw7/image/upload/v1680611802/PennyPot_Project/Social_Icons/icons8-linkedin-circled-250_l2c828.png"
          />
        </div>
      </div>
    </div>
    <hr className="h-line" />
    <div className="bottom">
      <p className="p1">
        © 2023 PennyPot | ABN 99 649 575 315 | Australian Credit Licence 536443
      </p>
      <div className="bottom-right">
        <p className="p2">Terms & Conditions</p>
        <p className="p2">Privacy Policy</p>
        <p className="p2">Privacy Collection Notice</p>
      </div>
    </div>
  </div>
)

export default Footer

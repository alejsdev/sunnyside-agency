import React from "react";

const Testimonials = () => {
  return (
    <div className="container-testimonials">
      <h3 className="title-testimonials">CLIENT TESTIMONIALS</h3>
      <div className="testimonials">
        <div className="testimonial">
          <img
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1646188043/frontend%20mentor%20challenge/image-emily_vvtfbj.jpg"
            alt=""
          />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>Emily R.</h4>
          <p>Marketing Director</p>
        </div>
        <div className="testimonial">
          <img
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1646188043/frontend%20mentor%20challenge/image-thomas_m1fzdq.jpg"
            alt=""
          />
          <p>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <h4>Thomas S.</h4>
          <p>Chief Operating Officer</p>
        </div>
        <div className="testimonial">
          <img
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1646188043/frontend%20mentor%20challenge/image-jennie_nrn7iq.jpg"
            alt=""
          />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>Jennie F.</h4>
          <p>Business Owner</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

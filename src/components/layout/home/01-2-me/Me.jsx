import React from "react";
import "./Me.css";

const Me = (props) => {
  return (
    <div>
      <section className="me">
        <div>
          <img src="/images/foto.png" alt="" className="image" />
        </div>
        <div className="info">
          <span>Andres Mauricio Galeano</span>
          <h2>Software Developer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut velit id quam fringilla vestibulum. Donec rhoncus, libero eget vehicula volutpat, purus nisl fermentum quam, ac auctor quam mi et odio. Vivamus euismod mi sit amet justo hendrerit, ac tempus libero ultrices. Nullam vehicula libero a ligula vulputate, id hendrerit risus pellentesque. Sed ut tincidunt justo, ac convallis elit. </p>
        </div>
      </section>
    </div>
  );
};

export default Me;

import React from "react";
import unnamed from ".../img/unnamed.jpg";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img
        className="border border-dark border-5"
        id="profile-pic"
        src={unnamed}
        alt=" "
      />
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

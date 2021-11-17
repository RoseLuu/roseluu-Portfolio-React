import React from "react";
import cover from "../img/rosepic-cover.jpg";
const styles = {
  coverPic: {
    width: "100%",
    height: 200,
    backgroundPosition: "center",
    backgroundSize: "cover",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
};
export default function Home() {
  return (
    <div>
      <img style={styles.coverPic} src={cover} alt="cover" />
      <div className="m-5">
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
          velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
          nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex.
          Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
          imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum
          tortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis
          orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed
          risus feugiat porttitor. Vestibulum molestie hendrerit massa non
          consequat. Vestibulum vitae lorem tortor. In elementum ultricies
          tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>
  );
}

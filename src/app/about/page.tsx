import React from "react";
import styles from "@/styles/pages/AboutPage.module.scss";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.mainDiv}>
        <div className={styles.aboutBox}>
          <div className={styles.title}>
            <h2>About Us</h2>
          </div>
          <div className={styles.paragraph}>
            <span>
              Welcome to Gourmet Guide, your ultimate destination for
              discovering the finest recipes from around the world. Our mission
              is to inspire and empower home cooks to create delicious and
              healthy meals with ease. Whether you are a novice in the kitchen
              or a seasoned chef, Gourmet Guide offers a wide array of recipes
              that cater to all skill levels and culinary preferences. At
              Gourmet Guide, we believe that cooking should be a joyous and
              creative experience. Our curated collection of recipes includes
              everything from classic comfort foods to innovative dishes that
              push the boundaries of traditional cuisine. Each recipe is
              meticulously tested and crafted to ensure that you achieve perfect
              results every time. Our team of passionate food enthusiasts and
              expert chefs work tirelessly to bring you the best in culinary
              content. We are committed to providing detailed instructions,
              helpful tips, and step-by-step photos to guide you through every
              recipe. Additionally, our website features a user-friendly
              interface, making it easy for you to search for recipes, save your
              favorites, and share your culinary creations with friends and
              family. Join us on this delicious journey and explore the endless
              possibilities of home cooking with Gourmet Guide. Let us be your
              trusted companion in the kitchen as you discover new flavors,
              master new techniques, and create unforgettable meals. Thank you
              for choosing Gourmet Guide – where great recipes become cherished
              memories.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            My name is Ekta Jangir, a passionate Computer Science Engineering
            student at IIIT Bhagalpur. I am excited to share my latest
            full-stack project, a hospital management system that leverages
            modern technologies to improve healthcare services. With a strong
            foundation in MERN stack development, I have dedicated countless
            hours to building an application that enhances patient experience
            and streamlines hospital operations.
          </p>
          <p>
            As we move into 2024, I am eager to embrace new challenges and
            continue expanding my skill set. My journey in the tech world has
            been incredibly rewarding, filled with opportunities to learn and
            grow. I believe that coding is not just a skill but an art form that
            allows us to create solutions for real-world problems.
          </p>
          <p>
            My project focuses on providing a comprehensive solution for
            hospital management, integrating features such as patient records,
            appointment scheduling, and billing systems. I aim to make
            healthcare more accessible and efficient for both providers and
            patients.
          </p>
          <p>
            Coding is not just a profession for me; it's a passion. I find joy
            in problem-solving and exploring new technologies. I am excited
            about the future and the potential of technology to transform lives.
          </p>
          <p>Together, let's make healthcare better!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;

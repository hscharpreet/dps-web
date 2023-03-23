import React from "react";
import { motion } from "framer-motion";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Home/Footer";
import VisitCard from "../Home/VisitCard";
import "./Readmore.css";
const Readmore = () => {
  return (
    <motion.div
      className="readmore"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar2 />
      <div className="readmoreBanner">
        <img
          src="https://alimacademy.org/wp-content/uploads/2020/07/Principals-Message-895x430-1.jpg"
          alt=""
        />
      </div>
      <div className="readMore">
        <p>
          Dear Students, Parents, and Guardians, <br /> <br />
          I am thrilled to welcome you to our school's website. As the
          principal, I am excited about the opportunity to work with each of you
          to create a safe, engaging, and stimulating learning environment for
          all of our students. At our school, we believe in providing a
          well-rounded education that not only focuses on academics but also
          emphasizes the importance of character development, community service,
          and the arts. We strive to create a culture of kindness, respect, and
          inclusion, where all students feel valued and supported. <br />
          Our dedicated and experienced faculty and staff are committed to
          providing the highest quality education possible. We utilize
          innovative teaching techniques and the latest technology to ensure
          that our students are prepared for the challenges of the 21st century.{" "}
          <br />
          I encourage you to explore our website to learn more about our
          programs, events, and activities. We also encourage you to get
          involved in our school community and to partner with us in supporting
          your child's education. <br />
          Thank you for choosing our school. Together, we can make a difference
          in the lives of our students. <br /> <br />
          Sincerely, <br />
          Pinki Gupta
        </p>
      </div>
      <VisitCard />
      <Footer />
    </motion.div>
  );
};

export default Readmore;

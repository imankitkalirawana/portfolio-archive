import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

const Services = () => {
  const [ref, inView] = useInView();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Start from the left (-50px)
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Move to the right (0px)
      transition={{ duration: 0.8, delay: inView ? 0 : 0.2 }}
      ref={ref}
      className="section services"
      id="services"
    >
      <div className="section-header-container">
        <div className="section-header border radius-regular">
          <i className="fa-light fa-suitcase"></i>
          <h2 className="section-title fs-xs fw-4">services</h2>
        </div>
      </div>
      <div className="section-content">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: inView ? 0.2 : 0.4 }}
          className="section-headline"
        >
          My <span className="color">Specializations</span>
        </motion.h3>
      </div>
      <div className="section-cards">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: inView ? 0.4 : 0.6 }}
          className="section-card"
        >
          <div className="section-card-header">
            <h4 className="card-title">Web Development</h4>
            <i className="fa-light fa-code"></i>
          </div>
          <div className="section-card-content">
            <p className="section-card-text">
              I have been working on web development for 5 years. I have
              experience in developing web applications using ReactJS, NextJS,
              and NodeJS.
            </p>
            <a href="#" className="section-card-link">
              24 Projects
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: inView ? 0.6 : 0.8 }}
          className="section-card"
        >
          <div className="section-card-header">
            <h4 className="card-title">Machine Learning</h4>
            <i className="fa-light fa-brain"></i>
          </div>
          <div className="section-card-content">
            <p className="section-card-text">
              I have been working on machine learning for 3 years. I have
              experience in developing machine learning models using Python and
              TensorFlow.
            </p>
            <a href="#" className="section-card-link">
              24 Projects
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: inView ? 0.8 : 1.0 }}
          className="section-card"
        >
          <div className="section-card-header">
            <h4 className="card-title">UI/UX Design</h4>
            <i className="fa-solid fa-swatchbook"></i>
          </div>
          <div className="section-card-content">
            <p className="section-card-text">
              I have been working on UI/UX design for 2 years. I have experience
              in designing UI/UX using Figma and Adobe XD.
            </p>
            <a href="#" className="section-card-link">
              24 Projects
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;

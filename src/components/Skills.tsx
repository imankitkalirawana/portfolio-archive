import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

const Skills = () => {
  const [ref, inView] = useInView();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      ref={ref}
      className="section introduce"
      id="introduce"
    >
      <div className="section-header-container">
        <div className="section-header border radius-regular">
          <i className="fa-light fa-house"></i>
          <h2 className="section-title fs-xs fw-4">INTRODUCE</h2>
        </div>
      </div>
      <div className="section-content">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-headline"
        >
          Say Hi from <span className="color">Bhuneshvar</span>, Developer,
          Designer, and Freelancer
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-subtitle"
        >
          Crafting digital delights with web and AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="section-property"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className="property-item"
          >
            <h4 className="property-headline color">10+</h4>
            <p className="property-subtitle">years of experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className="property-item"
          >
            <h4 className="property-headline color">120+</h4>
            <p className="property-subtitle">projects completed</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;

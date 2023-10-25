import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2, // Adjust the threshold as needed
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      ref={ref}
      className="section"
    >
      <div className="section-header-container">
        <div className="section-header border radius-regular">
          <i className="fa-light fa-user"></i>
          <h2 className="section-title fs-xs fw-4">about</h2>
        </div>
      </div>
      <div className="section-content">
        <motion.h3
          initial={{ opacity: 0, y: 75 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
          transition={{ duration: 0.8 }}
          className="section-headline"
        >
          Every great design begins with an even{" "}
          <span className="color">better story</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 75 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
          transition={{ duration: 0.8 }}
          className="section-subtitle"
        >
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops, one design problem at a
          time.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;

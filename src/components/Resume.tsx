import "../css/Resume.scss";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ResumeItem from "./ResumeItem";

const Resume = () => {
  const refContent = useRef(null);
  const refTitle = useRef(null);
  const isInViewContent = useInView(refContent);
  const isInViewTitle = useInView(refTitle);
  const mainControlsContent = useAnimation();
  const mainControlsTitle = useAnimation();

  useEffect(() => {
    if (isInViewTitle) {
      mainControlsTitle.start("visible");
    } else {
      mainControlsTitle.start("hidden");
    }
    if (isInViewContent) {
      mainControlsContent.start("visible");
    } else {
      mainControlsContent.start("hidden");
    }
  }, [isInViewTitle, mainControlsTitle, isInViewContent, mainControlsContent]);

  return (
    <>
      <section className="section resume" id="resume">
        <div className="section-header-container">
          <div className="section-header border radius-regular">
            <i className="fa-light fa-house"></i>
            <h2 className="section-title fs-xs fw-4">resume</h2>
          </div>
        </div>
        <div className="section-content" ref={refTitle}>
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControlsContent}
            transition={{ duration: 0.8 }}
            className="section-headline"
          >
            Education & <span className="color">Experience</span>
          </motion.h3>
          <p className="section-subtitle">
            My journey towards the world of programming...
          </p>
          <div ref={refContent} className="section-resume-container">
            <ResumeItem mainControls={mainControlsContent} delay={0.4} />
            <ResumeItem mainControls={mainControlsContent} delay={0.8} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

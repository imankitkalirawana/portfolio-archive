// ResumeItem.js
import { motion, AnimationControls } from "framer-motion";

type Props = {
  mainControls: AnimationControls;
  delay: number;
};

const ResumeItem = ({ mainControls, delay }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay }}
      className="section-resume"
    >
      <div className="progress-section">
        <div className="progress-circle"></div>
        <div className="progress-line"></div>
      </div>
      <div className="resume-details">
        <div className="resume-details-time">2022 - Present</div>
        <div className="resume-details-content">
          <div className="resume-details-item">
            <h3 className="resume-title">
              Bachelor Degree of Computer Science
            </h3>
            <p className="resume-subtitle">Lovely Professional University</p>
          </div>
          <div className="resume-details-item">
            <h3 className="resume-title">
              Bachelor Degree of Computer Science
            </h3>
            <p className="resume-subtitle">Lovely Professional University</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeItem;

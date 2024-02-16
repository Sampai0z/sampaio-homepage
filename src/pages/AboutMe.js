import { motion } from "framer-motion";
import classe from "./layout/AboutMe.module.css";
import ProfileImage from "../assets/vitor.jpeg";

export default function AboutMe() {
  return (
    <motion.div
      className={classe.aboutMe}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="row g-0">
          <div className="col-md-8">
            <div>
              {/* <span className={classe.image_profile_back}></span> */}
              <img
                src={ProfileImage}
                alt="my-profile"
                className={classe.image_profile}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className={classe.content}>
              <div>
                <h2 className={classe.name}>
                  Vitor <span className={classe.last_name}>Sampaio</span>
                </h2>
              </div>
              <div>
                <p className={classe.paragrafo}>
                  Greetings! My name is Vitor and I began my coding journey in
                  Feb 2022, diving into solo and collaborative Frontend projects
                  to refine my skills. Despite the absence of formal experience,
                  my commitment to creating stellar interfaces has been
                  unwavering. Adaptability is my forte—I quickly acclimate to
                  new technologies. I bring not just technical prowess but also
                  problem-solving finesse and design sensibilities to the table.
                  From breathing life into websites to optimizing user
                  interactions, I approach every project with zest and a
                  dedication to excellence. Join me in navigating the dynamic
                  realm where technology meets creativity. Let's transform
                  concepts into seamless digital experiences!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

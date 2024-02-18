import { motion } from "framer-motion";
import classe from "./styles/AboutMe.module.css";
import ProfileImage from "../assets/vitor.png";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="row g-0">
          <div className="col-md-12">
            <div className={classe.flex}>
              <img
                src={ProfileImage}
                alt="my-profile"
                className={classe.image_profile}
              />
            </div>
          </div>

          <div className={classe.flex}>
            <div>
              <section className={classe.section}>
                <div className={classe.align}>
                  <h3 className={classe.h3}>Work</h3>
                  <p className={classe.paragraph}>
                    Greetings! My name is Vitor and I began my coding journey in
                    Feb 2022, diving into solo and collaborative Frontend
                    projects to refine my skills. Despite the absence of formal
                    experience, my commitment to creating stellar interfaces has
                    been unwavering. Adaptability is my forte—I quickly
                    acclimate to new technologies. I bring not just technical
                    prowess but also problem-solving finesse and design
                    sensibilities to the table. From breathing life into
                    websites to optimizing user interactions, I approach every
                    project with zest and a dedication to excellence. Join me in
                    navigating the dynamic realm where technology meets
                    creativity. Let's transform concepts into seamless digital
                    experiences!
                  </p>
                </div>
                <button className={classe.button}>
                  <Link to="/works" className={classe.link}>
                    Projects &#8594;
                  </Link>
                </button>
              </section>
            </div>
          </div>
        </div>

        <div className="row g-0">
          <div className={classe.flex}>
            <div>
              <div className={classe.align}>
                <section>
                  <h3 className={classe.h3Bio}>Bio</h3>
                  <div className={classe.bio}>
                    <span className={classe.year}>2000</span>
                    <p className={classe.paragraphBio}>
                      Born in São Paulo, Brasil.
                    </p>
                  </div>
                  <div className={classe.bio}>
                    <span className={classe.year}>2020</span>
                    <p className={classe.paragraphBio}>
                      Served as a Missionary in Cape Verde.
                    </p>
                  </div>
                  <div className={classe.bio}>
                    <span className={classe.year}>2022</span>
                    <p className={classe.paragraphBio}>
                      Moved to portugal, Start Learning Programing Language.
                    </p>
                  </div>
                  <div className={classe.bio}>
                    <span className={classe.year}>2023</span>
                    <p className={classe.paragraphBio}>
                      Worked as an intern Full-stack Developer at InfoMoreira.
                    </p>
                  </div>
                  <div className={classe.bio}>
                    <span className={classe.year}>2024</span>
                    <p className={classe.paragraphBio}>
                      Started a BS in Software Development program at Brigham
                      Young University - Idaho, online.
                    </p>
                  </div>
                </section>

                <h3 className={classe.h3Love}>I ♥</h3>
                <p className={classe.paragraph}>
                  Play Videogames, Music, drawing, Programing, Movies, Rubick
                  cube and solve puzzles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

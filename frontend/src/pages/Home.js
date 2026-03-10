import "./Home.css";
import Header from "../components/Header";
import heroImg from "../assets/heroLMS.jpg";
import ldImg from "../assets/heroLMS.jpg";
import { useState, useEffect } from "react";

import {
  FaGraduationCap,
  FaSyncAlt,
  FaChartLine,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaMobileAlt,
  FaTools,
  FaShieldAlt,
  FaBullhorn,
  FaCogs,
  FaChartBar
} from "react-icons/fa";

function Home() {

  const slides = [
    {
      image: heroImg,
      title: "Advanced Learning Record Store",
      desc: "Capture and analyze all learning activities across multiple platforms with neuroLxp's LRS. Our platform ensures you have a comprehensive view of your learners’ progress and performance, enabling data-driven decisions."
    },
    {
      image: heroImg,
      title: "Comprehensive Learning Management System",
      desc: "Manage all your learning activities seamlessly with neuroLxp's robust LMS capabilities. From course creation to learner tracking, our platform provides all the tools you need to deliver effective education and training."
    },
    {
      image: heroImg,
      title: "Personalized Learning Experience",
      desc: "Enhance learner engagement with neuroLxp's LXP features. Our platform delivers personalized learning paths, tailored content, and interactive experiences to meet each learner's unique needs and preferences."
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home-page">

      <Header />

      {/* HERO SLIDER */}
      <section className="hero-slider">

        <div className="hero-card">

          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >

            <div className="hero-overlay">

              <h2>{slides[current].title}</h2>

              <p>{slides[current].desc}</p>

              <div className="hero-dots">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={current === index ? "dot active" : "dot"}
                    onClick={() => setCurrent(index)}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PLATFORM FEATURES GRID */}
      <section className="platform-features">

        <div className="feature-box">
          <div className="icon-circle"><FaRocket /></div>
          <h3>AI-Powered Learning</h3>
          <p>
            Our AI algorithms personalize learning experiences by adapting to each learner's pace,
            style, and preferences, ensuring effective and engaging education.
          </p>
        </div>

        <div className="feature-box">
          <div className="icon-circle"><FaLightbulb /></div>
          <h3>Interactive Content</h3>
          <p>
            Engage with immersive and interactive content including videos, quizzes,
            simulations, and gamified elements that make learning fun and effective.
          </p>
        </div>

        <div className="feature-box">
          <div className="icon-circle"><FaUsers /></div>
          <h3>Collaborative Learning</h3>
          <p>
            Enhance learning experiences through collaboration with peers, mentors,
            and industry experts using our integrated communication tools.
          </p>
        </div>

        <div className="feature-box">
          <div className="icon-circle"><FaGraduationCap /></div>
          <h3>Skill Development</h3>
          <p>
            Focus on practical skill-building with courses and modules designed
            to enhance real-world competencies, preparing learners for future careers.
          </p>
        </div>

        <div className="feature-box">
          <div className="icon-circle"><FaSyncAlt /></div>
          <h3>Continuous Learning</h3>
          <p>
            Stay ahead with continuous learning opportunities including up-to-date
            content and resources evolving with industry trends.
          </p>
        </div>

        <div className="feature-box">
          <div className="icon-circle"><FaChartLine /></div>
          <h3>Career Pathways</h3>
          <p>
            Track progress and explore career opportunities connecting learning
            outcomes to potential job roles and industries.
          </p>
        </div>

        <div className="feature-box">
          <div className="icon-circle"><FaMobileAlt /></div>
          <h3>Mobile-First Design</h3>
          <p>
            Access learning anytime, anywhere with our mobile-first design,
            ensuring a seamless experience across all devices.
          </p>
        </div>

        <div className="feature-box">
          <div className="icon-circle"><FaTools /></div>
          <h3>Customizable Interface</h3>
          <p>
            Personalize your learning environment with customizable interfaces
            aligned with your preferences.
          </p>
        </div>

        <div className="feature-box">
          <div className="icon-circle"><FaShieldAlt /></div>
          <h3>Secure and Scalable</h3>
          <p>
            Benefit from a platform prioritizing security and scalability,
            ensuring your data remains protected.
          </p>
        </div>

      </section>


      {/* DIGITAL NARRATIVES SECTION */}
      <section className="digital-section">

        <div className="digital-header">
          <h2>
            Unlocking Seamless <strong>Digital Narratives.</strong>
          </h2>

          <p>
            With our neuroLxps' advanced eLearning, accessibility, and content
            development services, we're redefining excellence in learning and reshaping
            the future of education. Embark on a journey of learning that's as seamless
            as it is enlightening.
          </p>
        </div>

        <div className="digital-card">

          <div className="digital-grid">

            <div className="digital-item">
              <div className="icon-circle"><FaBullhorn /></div>
              <h3>Get Discovered</h3>
              <p>
                Increase your brand's visibility with our white label neuroLxp
                solution tailored for your L&D requirements.
              </p>
            </div>

            <div className="digital-item">
              <div className="icon-circle"><FaCogs /></div>
              <h3>Deliver Excellence</h3>
              <p>
                neuroLxp delivers excellence by offering cutting-edge learning
                tools and personalized experiences.
              </p>
            </div>

            <div className="digital-item">
              <div className="icon-circle"><FaUsers /></div>
              <h3>Engage Learners</h3>
              <p>
                Drive learner engagement to new heights with multi-channel
                notifications and better learning interaction.
              </p>
            </div>

            <div className="digital-item">
              <div className="icon-circle"><FaChartBar /></div>
              <h3>Insightful Analytics</h3>
              <p>
                Leverage powerful analytics and insights to refine
                course offerings and enhance learner engagement.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* L&D SECTION */}
      <section className="ld-section">

        <div className="ld-container">

          <div className="ld-image">
            <img src={ldImg} alt="L&D with neuroLxp" />
          </div>

          <div className="ld-content">

            <h2>L&amp;D with neuroLxp.</h2>

            <p>
              Leverage the domain and technical expertise of neuroLxp in enhancing
              your organization's learning and development endeavors.
            </p>

            <p>
              Experience the rich tapestry of our dynamic L&amp;D associates for whom
              innovation is at the forefront and positivity permeates every interaction.
              Join us in charting a new course for the advancement of learning.
              Together, we'll shape the future of educational endeavors.
            </p>

            <span className="ld-sign">Parankumar C.</span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
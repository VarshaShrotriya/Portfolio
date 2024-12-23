import React, { useContext } from "react";
import "./Works.css";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Work using All these
          </span>
          <span>Tools & Technologies</span>
          <span style={{fontSize:'16px'}}>
          I have experience building full-stack web applications using React.js for the frontend, Express.js for 
            <br />
            the backend, and MongoDB for data storage. Proficient in JavaScript, HTML, and CSS, I create 
            <br />
            responsive and dynamic websites. I use GitHub for version control and VS Code as my primary 
            <br />
            development environment.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256' height={200} width={200} style={{borderRadius:'50%'}} alt="" />
          </div>
          <div className="w-secCircle">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png' height={200} width={200} style={{borderRadius:'50%'}} alt="" />
          </div>
          <div className="w-secCircle">
            <img src='https://global.discourse-cdn.com/sitepoint/original/3X/b/5/b59a78e2ed76c705f3c0dcb300f3f222aefdcd99.png' height={200} width={200} style={{borderRadius:'50%'}} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src='https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png?v=1958564572871810328' height={200} width={200} style={{borderRadius:'50%'}} alt="" />
          </div>
          <div className="w-secCircle">
            <img src='https://www.svgrepo.com/download/303360/nodejs-logo.svg' height={200} width={200} style={{borderRadius:'50%'}} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>67%</div>
        <span  style={{color: darkMode?'white':''}}>10th </span>
        <span>Percentage</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>78%</div>
        <span  style={{color: darkMode?'white':''}}>12th </span>
        <span>Percentage</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>76%</div>
        <span  style={{color: darkMode?'white':''}}>B.tech </span>
        <span>Percentage</span>
      </div>
    </div>
  );
};

export default Experience;

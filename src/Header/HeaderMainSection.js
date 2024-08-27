import React from "react";
import HeaderBox from "./HeaderBox";
import "./HeaderMainSection.css";

export default function HeaderMainSection() {
  return (
    <div className="mainCenter-div">
      <div className="contentandBox ">
        <div className="content-div">

        <div className="content col-xl-6 col-lg-8">
          <h1>
            Powerful digital solutions with <span> Kasuka</span>
          </h1>
          <h2>We are a team of talented digital marketers</h2>
        </div>
        </div>
        <div className="headerBox-div">

        <HeaderBox icon = 'fa-database' text = 'Stored information' />
        <HeaderBox icon = 'fa-paint-roller'  text = 'Final functions'  />
        <HeaderBox icon = 'fa-calendar-days' text = 'Portfolio' />
        <HeaderBox icon = 'fa-chart-simple' text = 'Qualitative chart' />
        <HeaderBox icon = 'fa-store' text = 'Dramatic text'  />
        </div>
      </div>
    </div>
  );
}

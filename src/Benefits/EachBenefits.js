import React from 'react'
import './EachBenefits.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function EachBenefits(props) {
  return (
    <div className='mainEachBenefits-div'>
        <div className='eachBenefit'>
        <FontAwesomeIcon icon={props.icon} style={{ color: "#FFD43B" }} />
            <div className='titleAndDetailOfBenefite'>
                <h3>
                {props.h3}
                </h3>
                <p>
                {props.p}
                    </p>
            </div>
        </div>
    </div>
  )
}

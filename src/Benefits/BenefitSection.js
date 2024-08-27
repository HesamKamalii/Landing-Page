import React from 'react'
import EachBenefits from './EachBenefits'

export default function BenefitSection() {
  return (
    <div><div className="about">
    <div className="bothContent">
      <div className="row-div">
        <div className="ditails">
         <EachBenefits icon = "fa-receipt" h3= 'Advertising is difficult' p = 'Those who lust for blacks do not see, they are guilty of abandoning their services'/>
         <EachBenefits icon = "fa-cube" h3= 'or is blinded' p = 'Those who lust for blacks do not see, they are guilty of abandoning their services'/>
         <EachBenefits icon = "fa-image" h3= 'which one of these' p = 'Either accepts or when no one avoids all. All the pains that make them worse'/>
         <EachBenefits icon = "fa-shield"   h3= 'happy truth' p = 'They follow nothing without bearing the truth in the praise of life' />
        </div>
        <div className="image">
          <img src="./image/about.jpg" alt="" />
        </div>
      </div>
    </div>
  </div></div>
  )
}

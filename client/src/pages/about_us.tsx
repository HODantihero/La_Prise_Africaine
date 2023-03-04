import React from 'react'
import '../style/styleSheet.css'

import { about_us, delco_light, ed_pp, th_ed, vdc } from 'assets'
//import { delco_light} from 'assets'
import { Box, Typography } from '@pankod/refine-mui'

const About_us = () => {
  return (
    <div className="common_flex_parent abus_bg">
      <Box className="common_flex_item">
        <p className="title">
          About Us:<br></br>
        </p>
        <p className='text'>
          Dean Crawford is a two time laureate of the most innovative and efficient energy solution’s award from The Solar<br></br>
          Impulse Foundation and Ambassador to Made in Wallonia.<br></br>
          <br></br>He is a two-time Honor graduate from the College of the United States Air Force in Electronics and Space Telecommunications<br></br>
          <br></br>He is considered a visionary, and is the inventor of The Planet Plug.<br></br>
          <br></br>“As a teenager growing up in rural North Carolina I recall experimenting with the 48 volts provided by the telephone<br></br>
          exchange located more than 30 miles away from our home.”
          <br></br>He has a professional career stretching back to 1980’s in the telecommunication industry, an industry powered by 48 volts.
          <br></br>He engineered 48 volt remote telecommunication sites in sub-Saharan Africa which compelled him to power his
          <br></br>entire home in Niger with 12 - 48 volts due to the absence of electricity in Niger.<br></br>
          <br></br>He produced the first know positive business case to solarize the thousands of remote telecommunication (BTS) sites
          <br></br>in sub-Saharan Africa in 2004.<br></br>
          <br></br>He predicted in 2014 that 50% of the household appliances in sub-Saharan Africa would be powered by 12 to 24 volts by 2035.
          <br></br>As of today approximately 25% of the home appliances in sub-Saharan (lights, fans, TV’s, refrigerators and freezers)
          <br></br>are powered by solar panels and 12 volts, and air-conditions with 24 volts.<br></br>
          <br></br>Coincidently he initials DC symbolize Direct-Current.
        </p>
      </Box>
      <div className="abus_flexgrid_parent">
        <Box className="abus_flexgrid_item">
          <div className="abus_flexgrid_content">
            <img src={delco_light} alt=""></img>
            <p>Our inspiration</p>
          </div>
        </Box>
        <Box className="abus_flexgrid_item">
          <div className="abus_flexgrid_content">
            <img src={vdc} alt=""></img>
            <p>Our heritage</p>
          </div>
        </Box>
        <Box className="abus_flexgrid_item">
          <div className="abus_flexgrid_content">
            <img src="" alt=""/>
            <p>Our destiny</p>
          </div>
        </Box>
      </div>           
    </div>
  )
}

export default About_us
import React from "react";
import '../style/styleSheet.css'
import { table } from 'assets'

const Sociohumanitarian = () => {
    return(
        <div className="sh_flex_parent sh_bg">
            <div className="sh_flex_item">
                <p className="sh_flex_item title">
                    Humanitarian<br></br>
                    Disaster relief advantages when using low voltage appliances and tools
                </p>
                <p className="sh_flex_item text">
                    No risk of electrocution! This is extremely important in wet or flooded areas.
                    Poses no danger to individuals or the environment.
                    Plug and play for individuals with limited technical knowledge.
                    No certified electrician required for the installation. 
                    Low voltage appliances are more reliable, quieter, and have a longer life cycle.
                    Low voltage appliance are lighter in weight hence easier and less costly to  transport.
                    Directly compatible with global standard 12/24/36 volt solar panels, without the need of a costly inverter.
                    Can operate from 12 volt batteries as well.
                </p>
            </div>
            <div className="sh_flex_item">
                <div className="">
                    <img src={table} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Sociohumanitarian
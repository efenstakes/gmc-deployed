import React from 'react'



import { Grid } from '@material-ui/core'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


import img_1 from '../../assets/images/1.png'

import './about.page.scss'

const WhyUsComponent = () => {
    return (
        <div className="section why_us_section">
            
            <Grid container className="why_us_section__grid">
                
                {/* content */}
                <Grid item xs={12} sm={12} md={6}>
                    <div className="about_section__content">

                        <h3> Why Us </h3>
                        <VSpacerComponent space={1} />

                        <p>
                            Etiam a commodo velit, sed varius eros. 
                            Proin et dignissim nisl. Etiam aliquam 
                            sodales pharetra. Duis vulputate tortor 
                            nunc, ultricies ultricies tortor 
                            hendrerit a. Nullam laoreet fermentum 
                            iaculis. Sed pharetra scelerisque ligula, 
                            a pretium felis iaculis a. Proin tempor, 
                            lectus sit amet auctor tempus.
                        </p>
                        <VSpacerComponent space={2} />
                        <p>
                            Donec tincidunt euismod fringilla. 
                            Phasellus eu vehicula nulla, vulputate 
                            dapibus felis. Sed ut purus in turpis 
                            aliquam porta ac eu eros. 
                        </p>

                    </div>
                </Grid>

                {/* image */}
                <Grid item xs={12} sm={12} md={6}>
                    <div className="about_section__image_wrapper">
                        <img 
                            src={img_1}
                            className="about_section__image_wrapper__image"
                        />
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

WhyUsComponent.propTypes = {

}

export default WhyUsComponent

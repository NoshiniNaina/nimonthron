import React from 'react';
import {AboutContainer,AboutWrapper,
        TopLine,Heading,Subtitle,
        } from './AboutElements';
const AboutSection = (lightBg,id,lightText,headline,darkText,discription) => {
    return (
        <>
          <AboutContainer lightBg={lightBg} id={id}>
            <AboutWrapper>
              
              <Heading >About US</Heading>
              <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum faucibus nisi, accumsan finibus elit ornare feugiat. Etiam tortor arcu, eleifend quis condimentum ut, pharetra sed quam. Proin vel magna porta, dignissim neque ut, laoreet ligula. In consectetur cursus malesuada. Vivamus faucibus pellentesque viverra. Nunc ac tristique mi. Etiam non velit lectus. Suspendisse malesuada rhoncus faucibus. Mauris ut pulvinar lacus, sed sollicitudin metus. Donec tempus maximus massa.</Subtitle>
            </AboutWrapper>
          </AboutContainer>  
        </>
    )
}

export default AboutSection

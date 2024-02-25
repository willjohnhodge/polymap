import { FC } from 'react';
import { AboutContainer, ContentContainer } from './About.styles';


export const About: FC = () => {
  return (
    <AboutContainer>
      <h2>About</h2>
      <ContentContainer>
        <p>This app was created by Will Hodge, a Full Stack Developer based in Melbourne, Australia.</p>
        <p>After having a blast working in a team creating an urbantech web application, and beforehand working in 3D modelling and design, I felt it was only natural to make another map app.</p>
        <div className="separated-div">Connect with me here!
          <ul>
            <li><a target="_blank" href="https://www.linkedin.com/in/will-hodge-b2ab04146/" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </ContentContainer>
    </AboutContainer>
  )
};

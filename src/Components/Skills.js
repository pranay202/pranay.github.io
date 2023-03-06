import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
  return (
    <SkillsStyled>
      <Title title={'My Skills'} span={'my skills'} />
      <InnerLayout>
        <div className='skills'>
          <ProgressBar title={'HTML5'} width={'70%'} text={'70%'} />
          <ProgressBar title={'CSS3'} width={'90%'} text={'90%'} />
          <ProgressBar title={'SASS'} width={'60%'} text={'60%'} />
          <ProgressBar title={'TailwindCSS'} width={'75%'} text={'75%'} />
          <ProgressBar title={'Bootstrap'} width={'75%'} text={'75%'} />
          <ProgressBar title={'JAVASCRIPT'} width={'80%'} text={'80%'} />
          <ProgressBar title={'JAVA'} width={'20%'} text={'20%'} />
          <ProgressBar title={'TYPESCRIPT'} width={'25%'} text={'25%'} />
          <ProgressBar title={'MongoDB'} width={'75%'} text={'75%'} />
          <ProgressBar title={'Express'} width={'75%'} text={'75%'} />
          <ProgressBar title={'React JS'} width={'75%'} text={'75%'} />
          <ProgressBar title={'NodeJS'} width={'75%'} text={'75%'} />
          <ProgressBar title={'Redux'} width={'75%'} text={'75%'} />
          <ProgressBar title={'NextJS'} width={'50%'} text={'50%'} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;

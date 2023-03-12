import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import TIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className='particle-con'>
        <Particle />
      </div>
      <div className='typography'>
        <h1 className='unselectable'>
          Hi, I'm <span>Pranay Kharabe</span>
        </h1>
        <p className='unselectable'>
          <p className='desc'>Designer and Developer.</p> Particularly adopt
          with MERN stack in web development applications and UI designing in
          Figma!
        </p>
        <div className='icons'>
          <a
            href='https://touch.facebook.com/pranay.kharabe.58'
            target='_blank'
            className='icon i-facebook'
            rel='noreferrer'
          >
            <FacebookIcon />
          </a>
          <a
            href='https://touch.twitter.com/kharabepranay23'
            target='_blank'
            className='icon i-twitter'
            rel='noreferrer'
          >
            <TIcon />
          </a>
          <a
            href='https://github.com/pranay202'
            target='_blank'
            rel='noreferrer'
            className='icon i-github'
          >
            <GithubIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/pranay-kharabe-b01456207/'
            target='_blank'
            rel='noreferrer'
            className='icon i-linkedin'
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .unselectable {
      user-select: none;
    }

    .desc {
      font-size: 1.3rem;
      font-weight: bold;
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-linkedin {
        &:hover {
          border: 2px solid var(--primary-color);
          color: blue;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;

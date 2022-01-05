import React from 'react'
import styled from 'styled-components';
import resume from '../img/resumeImg.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Pranay Kharabe</span></h4>
                <p className="paragraph">
                I am a designer and developer with hands-on experience of ReactJS and NodeJS as well as CSS pre-processor SASS.
Implemented responsive designs, and developing high performing, accessible, responsive sites. Did Cross-browser development and tools such as git. Strong verbal and written communication skills and the ability to work in a fast-paced environment with remote office locations.<br/>
Growth-mindset: Willingness to learn new technologies and processes
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Pranay Kharabe</p>
                        <p>: 20</p>
                        <p>: India </p>
                        <p>: Marathi, Hindi, English </p>
                        <p>: Pune, India</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <a href="https://docs.google.com/document/d/1wT7cJ5sY5GJChCEippoOIJNgT8Mxe6WM1MkeERoZ6Tw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <PrimaryButton title={'Download Cv'} />
                </a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 75%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;

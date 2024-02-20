import React from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { useGlobalContext } from '../Context'


const HeroSection = () => {

// const HeroSection = ({name, image}) => {
    
    // const firstName = useGlobalContext();

    const { name, image } = useGlobalContext();

  return (
    <Wrapper>
        <div className="container grid grid-two-column">
            {/* for data */}
            <div className="section-hero-data">
                <p className='hero-top-data'>IT Services and IT Consulting</p>
                <h1 className='hero-heading'>{name}</h1>
                <p className='hero-para'>
                Established in 2020, {name} Pvt. Ltd. is a dynamic 
                IT company at the forefront of digital innovation.                
                Headquartered Noida,New Delhi. we specialize in providing comprehensive 
                IT solutions to empower businesses and drive growth.
                </p>
                <Button className='btn hireme-btn'>
                <navLink to='/contact'> Hire me </navLink>
            </Button>
            </div>
            
            {/* for image */}
            <div className="section-hero-image">
                <picture>
                    <img src={image} alt='hero-image' className='hero-img' />
                </picture>
            </div>
        </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
    padding: 9rem 0;

    .section-hero-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
          
    }

    .btn {
        max-width: 13rem;
    }

    .hero-top-data {
        text-transform : uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.helper};
    }

    .hero.heading {
        text-transform: uppercase;
        font-size: 6.4rem;
    }

    .hero-para {
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 40rem;
    }

    .section-hero-image {
        display: flex;
        justify-content : center;
        align-items: center;
    }

    picture {
        text-align: center;
    }

    .hero-img {
        /* max-height:40%; */
        max-width: 80%;
    }

    @media (max-width:${({ theme }) => theme.media.mobile}) {
        .grid {
            gap: 7.2rem;
        }

    }
`;

export default HeroSection

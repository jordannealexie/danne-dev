import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  .skills-section {
    margin: 20px 0 0 0;

    .skill-category {
      margin-bottom: 15px;

      .skill-category-title {
        color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
        font-weight: 600;
        margin-bottom: 5px;
      }

      .skill-items {
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
        color: var(--slate);
        line-height: 1.6;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      items: 'Python · TypeScript · JavaScript · Java · SQL · C++ · C#',
    },
    {
      title: 'Frameworks & Libraries',
      items:
        'React · Next.js · Node.js · Express.js · FastAPI · Flask · .NET · Tailwind CSS · Redux Toolkit',
    },
    {
      title: 'Databases',
      items: 'PostgreSQL · MongoDB · Redis',
    },
    {
      title: 'Tools & DevOps',
      items: 'Docker · Jenkins · GitHub Actions · CI/CD · Linux',
    },
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hi! I'm Danne. I love creating digital things.</p>

            <p>
              My interest in programming started years ago, building websites on Neocities as a kid.
              That curiosity has since evolved into a passion for computer engineering.
            </p>

            <p>
              I'm currently a .NET Fullstack Developer Trainee at{' '}
              <a href="https://smits.com.ph/" target="_blank" rel="noreferrer">
                SMITS, Inc.
              </a>
              , the IT company of San Miguel Corporation, where I'm honing my skills in building
              enterprise-grade applications across the full stack.
            </p>

            <p>
              I'm particularly interested in full-stack development, cloud technologies, and
              artificial intelligence. I enjoy solving complex problems, learning new technologies,
              and building software that delivers meaningful value.
            </p>

            <p>
              Recently, I've been enjoying writing my thoughts and learnings as a developer on{' '}
              <a href="https://medium.com/@jordannebartolome" target="_blank" rel="noreferrer">
                Medium
              </a>
              , sharing insights, tutorials, and reflections from my journey in tech. I'm always
              looking for opportunities to collaborate, grow, and create impactful products.
            </p>
          </div>

          <div className="skills-section">
            {skillCategories.map((category, i) => (
              <div className="skill-category" key={i}>
                <div className="skill-category-title">{category.title}</div>
                <div className="skill-items">{category.items}</div>
              </div>
            ))}
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

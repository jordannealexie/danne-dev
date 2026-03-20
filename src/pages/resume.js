import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import { IconLogo } from '@components/icons';

const StyledMain = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const StyledHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  gap: 24px;
  margin-bottom: 32px;

  h1 {
    margin: 0;
  }

  p {
    margin: 6px 0 0;
    color: var(--light-slate);
  }

  .logo {
    width: 72px;
    height: 72px;
    color: var(--green);
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    .logo {
      width: 60px;
      height: 60px;
    }
  }
`;

const StyledFrame = styled.iframe`
  width: 100%;
  min-height: 80vh;
  border: 1px solid var(--lightest-navy);
  border-radius: 8px;
  background: var(--navy);
`;

const StyledFallback = styled.p`
  margin-top: 12px;

  a {
    color: var(--green);
    text-decoration: underline;
  }
`;

const ResumePage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Resume" />

    <StyledMain>
      <StyledHeader>
        <div>
          <h1>Resume</h1>
          <p>View or download my latest resume.</p>
        </div>
        <div className="logo" aria-hidden="true">
          <IconLogo />
        </div>
      </StyledHeader>

      <StyledFrame src="/resume.pdf" title="Resume PDF" />
      <StyledFallback>
        If the document does not load, open it directly at <a href="/resume.pdf">/resume.pdf</a>.
      </StyledFallback>
    </StyledMain>
  </Layout>
);

ResumePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ResumePage;

/* eslint-disable no-undef */
/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import GoogleTrends from '../components/molecule/googleTrends';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #222129;
`;

const StyledTitle = styled.h2`
  margin: 0 0 0.5em 1em;
`;

const Description = styled.div`
  margin: 0 0 0 2em;
`;

const GoogleWrapper = styled.div`
  padding: 2em;
`;

export default function Support() {
  const title = 'Support';
  const description = 'How often where React searched compared to other Frameworks?';

  return (
    <Layout>
      <Wrapper>
        <StyledTitle>
          {title}
        </StyledTitle>
        <Description>
          {description}
        </Description>
        <GoogleWrapper id="widget">
          <GoogleTrends
            type="TIMESERIES"
            url="https://ssl.gstatic.com/trends_nrtr/2431_RC03/embed_loader.js"
          />
        </GoogleWrapper>
      </Wrapper>
    </Layout>
  );
}

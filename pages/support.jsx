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

const ComponentContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100vw - 2em);
  background-color: #222129;
  padding: 0 1em 2em;
`;

const ComponentListContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ComponentTitle = styled.div`
  text-align: center;
`;

const GoogleWrapper = styled.div`
  padding: 2em;
`;

const GithubWrapper = styled.div`

`;

const GithubStars = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  color: black;
  text-align:center;
  align-items: center;
`;

const NPMWrapper = styled.div`

`;

const NPMDownloads = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  color: black;
  text-align:center;
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
        <ComponentContainer>
          <GoogleWrapper id="widget">
            <ComponentTitle>
              Google Trends
            </ComponentTitle>
            <GoogleTrends
              type="TIMESERIES"
              url="https://ssl.gstatic.com/trends_nrtr/2431_RC03/embed_loader.js"
            />
          </GoogleWrapper>
          <ComponentListContainer>
            <GithubWrapper>
              <ComponentTitle>
                Github-Stars
              </ComponentTitle>
              <GithubStars>
                TBD
              </GithubStars>
            </GithubWrapper>
            <NPMWrapper>
              <ComponentTitle>
                npm Downloads
              </ComponentTitle>
              <NPMDownloads>
                TBD
              </NPMDownloads>
            </NPMWrapper>
          </ComponentListContainer>
        </ComponentContainer>
      </Wrapper>
    </Layout>
  );
}

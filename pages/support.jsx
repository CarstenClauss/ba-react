import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import GoogleTrends from '../components/googleTrends';
import GithubStars from '../components/githubStars';
import NpmDownloads from '../components/npmDownloads';

const Wrapper = styled.div`
  height: 100%;
  background-color: #222129;
  color: white;
`;

const Description = styled.div`
  line-height: 2em;
  margin: 0 0.7em;
`;

const ComponentContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #222129;
  padding: 0 0 2em;
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const GoogleWrapper = styled.div`
  padding: 1em;
  width: calc(100% - 2em);
`;

const SupportWrapper = styled.div`
  padding: 1em;
  width: calc(100% - 2em);
`;

const GithubStarsWrapper = styled.div`
  text-align:center;
  align-items: center;
  color: white;
`;

const NPMDownloadsWrapper = styled.div`
  text-align:center;
  align-items: center;
  color: white;
`;

const ContainerView = styled.div`
  padding: 0 1em;
  h1 {
    margin: 0.1em 0;
  }
`;

const Title = styled.i`
  margin: 0 0.3em;
  font-size: 1.2em;
  font-weight: bold;
  color: #61DBFB;
`;

const GoogleLink = styled.a`
  padding: 0 0.5em;
  cursor: pointer;
  text-decoration: none;
  color: #61DBFB;
  font-weight: lighter;
  font-size: 0.7em;

  :hover {
    color: white;
  }
`;

export default function Support() {
  const title = 'Support';
  const description = 'How big is the Community of each Framework?';

  return (
    <Layout>
      <Wrapper>
        <ContainerView>
          <h1>
            <Title>
              {title}
            </Title>
          </h1>
          <Description>
            {description}
          </Description>
          <ComponentContainer>
            <GoogleWrapper id="widget">
              <Title>
                Google Trends
                <GoogleLink href="https://trends.google.com/trends/explore?cat=733&date=today%205-y&q=React,Vue,Angular">
                  (Link)
                </GoogleLink>
              </Title>
              <GoogleTrends
                type="TIMESERIES"
                url="https://ssl.gstatic.com/trends_nrtr/2431_RC03/embed_loader.js"
              />
            </GoogleWrapper>
            <ComponentWrapper>
              <SupportWrapper>
                <Title>
                  Github-Stars
                </Title>
                <GithubStarsWrapper>
                  <GithubStars />
                </GithubStarsWrapper>
              </SupportWrapper>
              <SupportWrapper>
                <Title>
                  npm Downloads(last 7 days)
                </Title>
                <NPMDownloadsWrapper>
                  <NpmDownloads />
                </NPMDownloadsWrapper>
              </SupportWrapper>
            </ComponentWrapper>
          </ComponentContainer>
        </ContainerView>
      </Wrapper>
    </Layout>
  );
}

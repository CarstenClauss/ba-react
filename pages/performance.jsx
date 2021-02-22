import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import PerformanceList from '../components/performanceList';

const Wrapper = styled.div`
  height: 100%
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

const Description = styled.p`
  line-height: 2em;
  margin: 0 0.7em;
`;

export default function Performance() {
  const title = 'Performance';
  const description = 'How long does it take to render x components? You need to use the Developer Tools to check.';

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
          <PerformanceList />
        </ContainerView>
      </Wrapper>
    </Layout>
  );
}

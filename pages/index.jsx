import React from 'react';
import styled from 'styled-components';
import Title from '../components/atoms/title';
import Layout from '../components/layout';

const Wrapper = styled.div`
  background-color: #222129;
`;

const ComponentContainer = styled.div`
  width: calc(100vw - 2em);
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  background-color: #222129;
  padding: 0 1em 2em;
`;

const Description = styled.div`
  margin: 0 0 0 2em;
`;

export default function Index() {
  return (
    <Layout>
      <Wrapper>
        <Title>
          REACT
        </Title>
        <ComponentContainer>
          <Description>
            [TBD: What is React? - shortdescription]
          </Description>
          <Description>
            [TBD: What is this App? - shortdescription]
          </Description>
        </ComponentContainer>
      </Wrapper>
    </Layout>
  );
}

import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Wrapper = styled.div`
  background-color: #222129;
`;

const ContainerView = styled.div`
  height: 100%;
  padding: 0 1em;
  h1 {
    margin: 0.1em 0;
  }
`;

const Description = styled.p`
  line-height: 2em;
  margin: 0 0.7em;
`;

const Title = styled.i`
  margin: 0 0.3em;
  font-size: 1.2em;
  font-weight: bold;
  color: #61DBFB;
`;

const ImgStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 1em 5em;

  img {
    width: 500px;
    height: auto;
  }
`;

export default function Index() {
  return (
    <Layout>
      <Wrapper>
        <ContainerView>
          <h1>
            <Title>
              REACT
            </Title>
          </h1>
          <Description>
            This application was built in terms of a bachelor thesis in Media Systems
            of the Hamburg University of Applied Sciences from Carsten Clauss in 2021.
            The Thesis is about a comparison of the Javascript Frameworks Angular, React and Vue.
            For the comparison I built three same-looking Applications
            with the help of each Framework.
            <br />
            This Application is built with
            <Title>React</Title>
          </Description>
          <ImgStyle>
            <img src="../static/logo.svg" alt="react" />
          </ImgStyle>
        </ContainerView>
      </Wrapper>
    </Layout>
  );
}

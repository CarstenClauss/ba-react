/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import RenderForm from '../components/molecule/renderform';

const Wrapper = styled.div`
  height: 100vh;
`;

const StyledTitle = styled.h2`
  margin: 0 0 0.5em 1em;
`;

const Description = styled.div`
  margin: 0 0 0 2em;
`;

const ComponentList = styled.div`
  margin: 5px;
  height: 40px;
  width: 40px;
  font-size: 0.5em;
`;

const ComponentContainer = styled.div`
  width: calc(100vw - 2em);
  display: flex;
  flex-wrap: wrap;
  background-color: #222129;
  padding: 0 1em 2em;
`;

export default function Performance() {
  const title = 'Performance';
  const description = 'How long does it take to render x components?';

  const [variable, setVariable] = useState([]);

  let numbers = [];
  let i = 1;

  const childHandler = (input) => {
    numbers = Array.from({ length: input }, () => (Math.random() * 0xFFFFFF << 0).toString(16));
    setVariable(numbers);
    console.log(numbers);
  };

  const componentStyle = (color, x) => ({
    backgroundColor: x + color,
  });

  return (
    <Layout>
      <Wrapper>
        <StyledTitle>
          {title}
        </StyledTitle>
        <Description>
          {description}
        </Description>
        <RenderForm action={(input) => childHandler(input)} />
        <ComponentContainer>
          { variable.map((number) => (
            <ComponentList
              key={i++}
              value={number.toString()}
              style={componentStyle(number, '#')}
            >
              #
              {i}
            </ComponentList>
          ))}
        </ComponentContainer>
      </Wrapper>
    </Layout>
  );
}

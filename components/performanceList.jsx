/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
import React, { useState } from 'react';
import styled from 'styled-components';
import RenderForm from './renderform';

const Wrapper = styled.div`
  width: calc(100% - 1.3em);
  margin: 0 0.7em;
`;

const ContainerView = styled.div`
  background-color: #222129;
  margin: 0 0 2em;
`;

const ComponentCube = styled.div`
  margin: 5px;
  height: 40px;
  width: 40px;
  font-size: 0.5em;
`;

const ComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #222129;
  padding: 0 0 2em;
  justify-content: center;
`;

export default function PerformanceList() {
  const [variable, setVariable] = useState([]);

  let numbers = [];
  const passHandler = (input) => {
    numbers = Array.from({ length: input }, () => (Math.random() * 0xFFFFFF << 0).toString(16));
    setVariable(numbers);
  };
  let i = 1;
  const componentStyle = (color, x) => ({
    backgroundColor: x + color,
  });

  return (
    <Wrapper>
      <RenderForm action={(input) => passHandler(input)} />
      <ContainerView>
        <ComponentContainer>
          { variable.map((number) => (
            <ComponentCube
              key={i++}
              value={number.toString()}
              style={componentStyle(number, '#')}
            >
              #
              {i}
            </ComponentCube>
          ))}
        </ComponentContainer>
      </ContainerView>
    </Wrapper>
  );
}

/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Wrapper = styled.div`
  height: 100vh;
`;

const ComponentList = styled.div`
  margin: 5px;
  height: 50px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  padding: 1em;
`;

const StyledButton = styled.button`
  font-size: 0.9em;
  border: white solid 1px;
  background-color: transparent;
  color: white;
  padding: 0.5em;
  margin: 1em 2em 0 0;
`;

const StyledInput = styled.input`
  font-size: 0.9em;
  border: white solid 1px;
  padding: 0.5em;
  margin: 1em 2em 0 0;
`;

const ComponentContainer = styled.div`
  width: calc(100vw - 2em);
  display: flex;
  flex-wrap: wrap;
  background-color: #222129;
  padding: 0 1em 2em;
`;

export default function Performance() {
  const [variable, setVariable] = useState([]);
  const [input, setInput] = useState(0);

  let numbers = [];
  let i = 1;

  const componentStyle = (color, x) => ({
    backgroundColor: x + color,
  });

  function handleSubmit(x, e) {
    e.preventDefault();
    numbers = Array.from({ length: x }, () => (Math.random() * 0xFFFFFF << 0).toString(16));
    setVariable(numbers);
  }

  function handleRemove(e) {
    e.preventDefault();
    numbers = [];
    setInput(0);
    setVariable(numbers);
  }

  return (
    <Layout>
      <Wrapper>
        Performance Page
        <FormWrapper>
          <StyledInput
            type="number"
            name="number"
            placeholder="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <StyledButton
            type="button"
            onClick={(e) => handleSubmit(input, e)}
          >
            Add Components
          </StyledButton>
          <StyledButton
            type="button"
            onClick={(e) => handleRemove(e)}
          >
            Remove Components
          </StyledButton>
        </FormWrapper>
        <ComponentContainer>
          { variable.map((number) => (
            <ComponentList
              key={i++}
              value={number}
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

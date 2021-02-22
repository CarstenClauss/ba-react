import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  padding: 1em 0 1em;
`;

const FormButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
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

export default function Renderform({ action }) {
  const [input, setInput] = useState(0);

  return (
    <FormWrapper>
      Enter a number.
      <FormButtons>
        <StyledInput
          type="number"
          name="number"
          placeholder="number"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          required
        />
        <StyledButton
          type="button"
          onClick={() => {
            action(input);
          }}
        >
          Add Components
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => {
            setInput(0);
            action(0);
          }}
        >
          Remove Components
        </StyledButton>
      </FormButtons>
    </FormWrapper>
  );
}

import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  gap: 12px;
  margin-bottom: 40px;

  input {
    font-family: var(--header-font);
    flex: 1;
    background: white;
    border: 2px solid black;
    border-radius: 12px;
    padding: 16px;
    font-size: 18px;
    outline: none;
  }

  button {
    background: black; 
    color: white;
    border: 2px solid black;
    border-radius: 12px;
    padding: 0 25px;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      background: gray;
      border-color: gray;
      cursor: not-allowed;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  max-width: 600px;
  padding: 0;
  list-style: none;
`;

export const ItemRow = styled.li`
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid black;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 12px;
  gap: 15px;

  label {
    flex: 1;
    font-size: 18px;
    font-weight: 400;
    color: black;
    cursor: pointer;
  }

  .checked {
    color: #888;
    text-decoration: line-through;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: black;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: black;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const FooterButton = styled.button`
  background: white;
  border: 2px solid black;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`


export const InputLabel = styled.div`
  flex: 1;
  margin: 10px;

`
export const InputLabelTitle = styled.div`
  flex: 2;
  margin: 10px;

`


export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`


export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #44403C;
  border-radius: 5px;

`

export const Select = styled.select`
width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #44403C;
  border-radius: 5px;

`

export const Button = styled.button`
  width: 100%;
  height: 32px;
  padding: 0 5px;
  border: 1px solid #44403C;
  border-radius: 5px;
  background-color: #44403C;
  color: white;
  cursor: pointer;
  &:hover {
      opacity: 0.7;
      color: white;
  }
`
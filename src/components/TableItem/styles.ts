import styled from "styled-components";

export const TableRow = styled.tr`
  
`

export const TableColumn = styled.td`
  padding: 10px 0;
`

export const Category = styled.div<{color: string}>`
  display: inline-block;
  padding: 5px 10px;
  color: #fff;
  border-radius: 5px;

  background-color: ${props => props.color}
`

export const Value = styled.div<{colors: boolean}>`
  color: ${props => props.colors ?  "red" : "green"  }
`
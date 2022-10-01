import * as C from "./styles"

interface Props{
  title: string
  value: number
}


export function ResumeItem({title, value}: Props){
  return (

    <C.Container>

    <C.Title>{title}</C.Title>
    <C.Info>R$ {value}</C.Info>

    </C.Container>


  )
}
import * as C from "./styles"

interface Props{
  title: string
  value: number
  color?: string
}


export function ResumeItem({title, value, color}: Props){
  return (

    <C.Container>

    <C.Title>{title}</C.Title> {/* Título */}
    <C.Info color={color}>  {/*Valor -> propriedade Color é opcional*/}
      R$ {value}
    </C.Info>

    </C.Container>


  )
}
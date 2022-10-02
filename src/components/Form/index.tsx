import { FormEvent, useState } from "react"
import { categories } from "../../data/categories"
import { ItemProps } from "../../data/items"
import { formtDateFull } from "../dateFilter"
import * as C from "./style"

interface Props{
  onAdd: (item: ItemProps) => void
}

export function Form({onAdd}: Props){
  const [categoryValue, setCategoryValue] = useState("")
  const [dataValue, setDataValue] = useState("")
  const [titleValue, setTitleValue] = useState("")
  const [valueField, setValueField] = useState("")

  const categoriesKeys: string[] = Object.keys(categories)

  function handleButtonAdd(){

    let errors = []

    if(dataValue == ""){
      errors.push("Preencha o campo DATA")
    }
    if(categoryValue == ""){
      errors.push("Selecione uma CATEGORIA")
    }
    if(titleValue == ""){
      errors.push("Preencha o campo TÍTULO")
    }
    if(valueField == ""){
       errors.push("Preencha o campo VALOR") 
    }

    if(errors.length > 0){
      let textErr = ""
      for(let i in errors){
        textErr += `Erros : ${errors[i]}, `
      }
      return alert(textErr)
    }else{
      onAdd({
        date: formtDateFull(dataValue),
        category: categoryValue,
        title: titleValue,
        value: Number(valueField)
      })
    }

     clearField()
  }

  function clearField(){
    setCategoryValue("")
    setDataValue("")
    setTitleValue("")
    setValueField("")
  }



  return(
    <C.Container>
        <C.InputLabel>
          <C.Title>Data</C.Title>
          <C.Input 
          value={dataValue}
          onChange={e => setDataValue(e.target.value)}
          type="date"
          />
        </C.InputLabel>

        <C.InputLabel>
          <C.Title>Categoria</C.Title>
          <C.Select 
            value={categoryValue}
            onChange={e => setCategoryValue(e.target.value)}
          >
            <option value=""></option>
            {
              categoriesKeys.map((item, index) => (
                <option key={index} value={item}>{categories[item].title}</option>
              ))
            }

          </C.Select>
        </C.InputLabel>

        <C.InputLabel>
          <C.Title>Título</C.Title>
          <C.Input 
          value={titleValue}
          onChange={e => setTitleValue(e.target.value)}
          placeholder="Informe um título..."
          type="text"
          />
        </C.InputLabel>

        <C.InputLabel>
          <C.Title>Valor</C.Title>
          <C.Input 
          value={valueField}
          onChange={e => setValueField(e.target.value)}
          placeholder="Informe um valor..."
          type="number"
          />
        </C.InputLabel>

        <C.InputLabel>
          <C.Title>&nbsp;</C.Title>
          <C.Button onClick={handleButtonAdd}>Adicionar</C.Button>
        </C.InputLabel>





    </C.Container>
  )

}
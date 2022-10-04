import { FormEvent, useState } from "react"
import { categories } from "../../data/categories"
import { ItemProps } from "../../data/items"
import { formtDateFull } from "../dateFilter"
import * as C from "./style"

interface Props{
  onAdd: (item: ItemProps) => void
}

export function Form({onAdd}: Props){
  const [categoryValue, setCategoryValue] = useState("") //Armazenar os dados digitados -> Categoria, Data, Título, Valores
  const [dataValue, setDataValue] = useState("")
  const [titleValue, setTitleValue] = useState("")
  const [valueField, setValueField] = useState("")

  const categoriesKeys: string[] = Object.keys(categories) //Forma de pegar apenas as chaves do objeto

  function handleButtonAdd(){

    let errors = [] //Array que irá armazenar nossos Errors

    //Verifica se está vazio nossa Array é enviar uma mensagem para Array 
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

    if(errors.length > 0){ //Se caso nossa array possuir o tamanho maior que 0 
      let textErr = errors.map(item =>  `\nError: ${item}`)
      return alert(textErr) //Retornamos um alerte contendo os textos do Array(errors)
    }else{
      //Se retornar tudo: Ok -> Função irá receber estes dados
      onAdd({ 
        date: formtDateFull(dataValue), //Transformmos em formato de Data nosso element (dataValue)
        category: categoryValue, //Recebemos a category
        title: titleValue, //Recebemos o Title
        value: Number(valueField) //Valor digitado, como setamos como string, teremos que converter
      })
    }

     clearField() //Limpar todos os inputs
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
          value={dataValue} //Valor do input
          onChange={e => setDataValue(e.target.value)} //Capturando o valor do input
          type="date"
          />
        </C.InputLabel>

        <C.InputLabel>
          <C.Title>Categoria</C.Title>
          <C.Select 
            value={categoryValue} //Valor do select
            onChange={e => setCategoryValue(e.target.value)} //Captura o valor do select que está selecionado no momento
          >
            <option value=""></option>
            {
              categoriesKeys.map((item, index) => (
                <option key={index} value={item}>{categories[item].title}</option> //Aui fazemos percorrendo o array, pegando o valor do título de acordo a chave passsada no objeto(categories)
              ))
            }

          </C.Select>
        </C.InputLabel>

        <C.InputLabel>
          <C.Title>Título</C.Title>
          <C.Input 
          value={titleValue} //Valor do input
          onChange={e => setTitleValue(e.target.value)} //Capturando o valor do input
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
          <C.Button onClick={handleButtonAdd}>Adicionar</C.Button> {/* Button de adicionar */}
        </C.InputLabel>





    </C.Container>
  )

}
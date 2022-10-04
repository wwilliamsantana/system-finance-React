import { useEffect, useState } from "react"

import * as C from "./styles/App.styles"
import { categories } from "./data/categories"
import { items, ItemProps } from "./data/items"
import { filterListByMonth, getCurrentMonth } from "./components/dateFilter"
import { TableArea } from "./components/TableArea"
import { InfoArea } from "./components/InfoArea"
import { Form } from "./components/Form"


export function App() {
  const [list, setList] = useState(items) // Lista de items (Despesas e Renda)
  const [filteredList, setFilteredList] = useState<ItemProps[]>([]) //Lista Filtrada (De acordo ao mês atual que estivermos)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()) //Busca o mês atual é o defini como padrão
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  function handleCurrentMonth(date: string){
    setCurrentMonth(date) //Data Atualizada de acordo a mudança do Usúario
  }

  function handleAddData(item: ItemProps){
     setList(prevState => [...prevState, item]) //Adicionar o elemento na nossa lista.
  }


  useEffect(()=> { //A cada mudança na lista ou no mês iremos alterar nossa Lista Filtrada
    setFilteredList(filterListByMonth(list, currentMonth)) //Para alteramos nossa lista chamamos uma função que irá retornar uma lista de items de acordo a data passada
  }, [list, currentMonth])

  useEffect(()=> { //A cada atualização no FilteredList (Lista filtrada) iremos atualizar os Valores da nossas variáveis de Renda/Despesas  + Elementos em tela por atualizar o FilteredList nossa TableArea mudará
    let incomeCount = 0 
    let expenseCount = 0

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value
      }else{
        incomeCount += filteredList[i].value
      }
    }

    setExpense(expenseCount)
    setIncome(incomeCount)



  }, [filteredList])

  return (
   <C.Container>
    <C.Header>
      <C.HeaderText>
        Sistema Financeiro
      </C.HeaderText>
    </C.Header>

    <C.Body>

    <InfoArea  //Área de informações 
    onCurrentMonth={handleCurrentMonth} //Vamos ter como parâmetro a Data Atualizada
    currentMonth={currentMonth} //Passamos a Data Atual
    income={income} // Passamos os valores de income (Renda)
    expense={expense} //Passamos os valores de expense (Despesa)
    />

    <Form onAdd={handleAddData}/> {/* onde vamos capturar nossos dados */}

    <TableArea list={filteredList}/> {/* Componentes da Tabela, irá receber a lista filtrada */}


    </C.Body>

   </C.Container>
  )
}



import { useEffect, useState } from "react"

import * as C from "./styles/App.styles"
import { categories, CategoriesProps } from "./data/categories"
import { items, ItemProps } from "./data/items"
import { filterListByMonth, getCurrentMonth } from "./components/dateFilter"
import { TableArea } from "./components/TableArea"
import { InfoArea } from "./components/InfoArea"
import { Form } from "./components/Form"


export function App() {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<ItemProps[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  function handleCurrentMonth(date: string){
    setCurrentMonth(date)
  }

  function handleAddData(item: ItemProps){
     setList(prevState => [...prevState, item])
  }


  useEffect(()=> {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(()=> {
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

    <InfoArea 
    onCurrentMonth={handleCurrentMonth}
    currentMonth={currentMonth}
    income={income}
    expense={expense}
    />

    <Form onAdd={handleAddData}/>

    <TableArea list={filteredList}/>


    </C.Body>

   </C.Container>
  )
}



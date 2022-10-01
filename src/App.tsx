import { useEffect, useState } from "react"

import * as C from "./styles/App.styles"
import { categories, CategoriesProps } from "./data/categories"
import { items, ItemProps } from "./data/items"
import { filterListByMonth, getCurrentMonth } from "./components/dateFilter"
import { TableArea } from "./components/TableArea"
import { InfoArea } from "./components/InfoArea"


export function App() {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<ItemProps[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
 

  function handleCurrentMonth(date: string){
    setCurrentMonth(date)
  }


  useEffect(()=> {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])


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
    />

    {/* Área de inserção*/}

    <TableArea list={filteredList}/>


    </C.Body>

   </C.Container>
  )
}



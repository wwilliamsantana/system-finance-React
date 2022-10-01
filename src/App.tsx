import { useEffect, useState } from "react"

import * as C from "./styles/App.styles"
import { categories, CategoriesProps } from "./data/categories"
import { items, ItemProps } from "./data/items"
import { filterListByMonth, getCurrentMonth } from "./components/dateFilter"
import { TableArea } from "./components/TableArea"


export function App() {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<ItemProps[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
 
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

    {/* Área de informações*/}

    {/* Área de inserção*/}

    <TableArea/>


    </C.Body>

   </C.Container>
  )
}



import * as C from "./styles"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { formatMonths } from "../dateFilter";
import { ResumeItem } from "../ResumeItem";

interface Props{
  currentMonth: string;
  onCurrentMonth: (date: string) => void
  income: number
  expense: number
}


export function InfoArea({currentMonth, onCurrentMonth, income, expense}: Props){


  function handlePrevMonth(){
    let [year, month] = currentMonth.split("-")
    let newDate = new Date(parseInt(year), parseInt(month) - 1  , 1)
    newDate.setMonth(newDate.getMonth() - 1)
    
    onCurrentMonth(`${newDate.getFullYear()}-${newDate.getMonth() + 1 }`)
  }

  function handleNextMonth(){
    let [year, month] = currentMonth.split("-")
    let newDate = new Date(parseInt(year), parseInt(month) - 1  , 1)
    newDate.setMonth(newDate.getMonth() + 1)
    
    onCurrentMonth(`${newDate.getFullYear()}-${newDate.getMonth() + 1 }`)
  }


  return (

    <C.Container>
      
        <C.MonthArea>

          <C.MonthArrow onClick={handlePrevMonth}>
            <AiOutlineArrowLeft/>
          </C.MonthArrow>

          <C.MonthTitle>{formatMonths(currentMonth)}</C.MonthTitle>

          <C.MonthArrow onClick={handleNextMonth}>
            <AiOutlineArrowRight/>
          </C.MonthArrow>

        </C.MonthArea>

        <C.ResumeArea>
          <ResumeItem title="Receitas" value={income}/>
          <ResumeItem title="Despesas" value={expense}/>
          <ResumeItem title="Balanços" value= {income - expense}/>
        </C.ResumeArea>

    </C.Container>


  )



}
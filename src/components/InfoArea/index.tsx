import * as C from "./styles"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { formatMonths } from "../dateFilter";
import { ResumeItem } from "../ResumeItem";

interface Props {
  currentMonth: string; //2022-9 (0 a 11)
  income: number
  expense: number
  onCurrentMonth: (date: string) => void
}


export function InfoArea({ currentMonth, onCurrentMonth, income, expense }: Props) {


  function handlePrevMonth() { //Função de atualizar a data atual

    let [year, month] = currentMonth.split("-") //Pegamos a data atual
    let newDate = new Date(parseInt(year), parseInt(month) - 1, 1) //Criamos uma DATE com os elementos que foram recebedios(Data atual) é diminuimos 1 para ficar no formato padrão de date (já que nossa função currentMonth soma +1)
    newDate.setMonth(newDate.getMonth() - 1) //Aqui atualizamos o mês DIMINUINDO -1 no parâmetro da data

    onCurrentMonth(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`) //Aqui voltamos para o formato padrão que é a ANO/MÊS + 1 (Por ser de 0 a 11 -> mês)
  }

  function handleNextMonth() { //Função de atualizar a data atual
    let [year, month] = currentMonth.split("-") //Pegamos a data atual
    let newDate = new Date(parseInt(year), parseInt(month) - 1, 1) //Criamos uma DATE com os elementos que foram recebedios(Data atual) é diminuimos 1 para ficar no formato padrão de date (já que nossa função currentMonth soma +1)
    newDate.setMonth(newDate.getMonth() + 1) //Aqui atualizamos o mês SOMANDO +1 no parâmetro da data

    onCurrentMonth(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`) //Aqui voltamos para o formato padrão que é a ANO/MÊS + 1 (Por ser de 0 a 11 -> mês)
  }


  return (

    <C.Container>

      <C.MonthArea> {/* Área de Dates */}

        <C.MonthArrow onClick={handlePrevMonth}> {/* Click -> Chamar a função que Atualiza o mês atual para -  */}
          <AiOutlineArrowLeft />
        </C.MonthArrow>

        <C.MonthTitle>{formatMonths(currentMonth)}</C.MonthTitle> {/* Exibi em tela o mês que está */}

        <C.MonthArrow onClick={handleNextMonth}> {/* Click -> Chamar a função que Atualiza o mês atual para +*/}
          <AiOutlineArrowRight />
        </C.MonthArrow>

      </C.MonthArea>

      <C.ResumeArea> {/* Área da infos */}
        <ResumeItem title="Receitas" value={income} /> {/* Aqui é as receitas -> Irá receber o title + value */}
        <ResumeItem title="Despesas" value={expense} /> {/* Aqui é as despesas -> Irá receber o title + value */}
        <ResumeItem  /* Aqui é o Balanço -> Irá receber o title + value */
          color={(income - expense) > 0 ? "green" : "red"} // Vamos passar o parâmetro de cor -> Se for maior que 0 -> "green" se não "red"
          title="Balanços"
          value={income - expense} //Value Renda - Despesas
        />
      </C.ResumeArea>

    </C.Container>


  )



}
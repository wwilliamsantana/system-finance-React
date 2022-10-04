import { ItemProps } from "../data/items"

export const getCurrentMonth = () => { //Busca o mês atual 
  let now = new Date()
  return `${now.getFullYear()}-${now.getMonth() + 1}` //Retorna ano + mês (Sendo que o mês inicia em 0 a 11, por isso o +1)
}

export const filterListByMonth = (list: ItemProps[], date: string): ItemProps[] => { //Retorna uma lista de acorodo o ANO/MÊS da nossa lista de items

  let [year, month] = date.split("-")

  let newList: ItemProps[] = list.filter(item => item.date.getFullYear() === parseInt(year)  && item.date.getMonth()+1 === parseInt(month))
  
  return newList 
}

export const formatMonths = (date: string): string => { //Retornar o mês em string
    let [year, month] = date.split("-") 
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    return `${months[parseInt(month) - 1]} de ${year}` //Retorna uma string contendo o mês + ano(number)
}


export const formtDateFull = (data: string) => {
    
    const [year, month, day] = data.split("-")
    
    return new Date(parseInt(year), parseInt(month)-1, parseInt(day))
}
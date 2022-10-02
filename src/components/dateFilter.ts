import { ItemProps } from "../data/items"

export const getCurrentMonth = () => {
  let now = new Date()
  return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: ItemProps[], date: string): ItemProps[] => {

  let [year, month] = date.split("-")

  let newList: ItemProps[] = list.filter(item => item.date.getFullYear() === parseInt(year)  && item.date.getMonth()+1 === parseInt(month))
  console.log(newList)

  return newList
}

export const formatMonths = (date: string): string => {
    let [year, month] = date.split("-")
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    return `${months[parseInt(month) - 1]} de ${year}`
}

export const formtDateFull = (data: string) => {
    
    const [year, month, day] = data.split("-")
    
    return new Date(parseInt(year), parseInt(month)-1, parseInt(day))
}
import { ItemProps } from "../data/items"

export const getCurrentMonth = () => {
  let now = new Date()
  return `${now.getFullYear()}-${now.getMonth()}}`
}

export const filterListByMonth = (list: ItemProps[], date: string): ItemProps[] => {
  let newList: ItemProps[] = []
  let [year, month] = date.split("-")

  
  for(let i in list){

    if(list[i].date.getFullYear() === parseInt(year)  && list[i].date.getMonth() === parseInt(month) ){
      newList.push(list[i])
    }

  }
  //Podemos refazer essa condição usando o método Filter/Map

  return newList
}
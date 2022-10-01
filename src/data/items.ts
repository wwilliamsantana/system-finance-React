
export interface ItemProps{
  date: Date
  category: string
  title: string
  value: number
}


export const items: ItemProps[] = [
  {
    date: new Date(2022, 9, 16),
    category: "food",
    title: "McDonalds",
    value: 32.15
  },
  {
    date: new Date(2022, 9, 16),
    category: "food",
    title: "BurguerKing",
    value: 28
  },
  {
    date: new Date(2022, 9, 25),
    category: "rent",
    title: "Aluguel",
    value: 850
  },
  {
    date: new Date(2022, 10, 15),
    category: "salary",
    title: "Salario apt ",
    value: 2000
  }
]
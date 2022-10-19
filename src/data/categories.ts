
export interface CategoriesProps {
  [type: string]: {
    title: string
    color: string
    expense: boolean
  }
}

export const categories: CategoriesProps = {
  food: {
    title: "Alimentação",
    color: "blue",
    expense: true
  },
  rent: {
    title: "Aluguel",
    color: "brown",
    expense: true
  },
  salary: {
    title: "Salário",
    color: "green",
    expense: false
  },
  expense: {
    title: "Despesas",
    color: "red",
    expense: true
  },
  income: {
    title: "Entrada",
    color: "green",
    expense: false
  }
}
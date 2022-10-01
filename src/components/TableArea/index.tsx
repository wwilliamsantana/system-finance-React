import { ItemProps } from "../../data/items"
import * as C from "./styles"

interface Props{
  list: ItemProps[]
}

export function TableArea({list}: Props){

  return (
    <C.Table>
      
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn >Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>

      <tbody>
        {
          list.map((item, index) => (
            <tr key={index}>
              <td>{}</td>
              <td>{item.category}</td>
              <td>{item.title}</td>
              <td>{item.value}</td>
            </tr>
          ))
        }

      </tbody>

    </C.Table>


  )


}
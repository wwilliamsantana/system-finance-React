import { ItemProps } from "../../data/items"
import { TableItem } from "../TableItem"
import * as C from "./styles"

interface Props {
  list: ItemProps[]
}

export function TableArea({ list }: Props) {  //Vai recber nossa Lista Filtrada

  return (
    <C.Table>
      {/* Header da nossa Table */}
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn >Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      {/* Corpo da nossa tabela*/}
      <tbody>
        {
          list.map((item, index) => (
            <TableItem key={index} item={item} />
          ))
          /* Iremos percorer a array (Items) é passar para nosso componente TableItem */
        }
      </tbody>

    </C.Table>


  )


}
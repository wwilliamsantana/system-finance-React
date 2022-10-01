import { ItemProps } from "../../data/items"
import { categories } from "../../data/categories"
import * as C from "./styles"

interface Props{
  item: ItemProps
}


export function TableItem({item}: Props){
  


  return(

    <C.TableRow>
        <C.TableColumn>{item.date.toLocaleDateString("pt-br")}</C.TableColumn>
        <C.TableColumn>

        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>

        </C.TableColumn>
        <C.TableColumn>{item.title}</C.TableColumn>
        <C.TableColumn>
          <C.Value colors={categories[item.category].expense }>
            R$ {item.value}
          </C.Value>
        </C.TableColumn>
    </C.TableRow>



  )

}
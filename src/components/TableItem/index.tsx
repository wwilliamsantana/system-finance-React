import { ItemProps } from "../../data/items"
import { categories } from "../../data/categories"
import * as C from "./styles"

interface Props{
  item: ItemProps
}


export function TableItem({item}: Props){
  


  return(

    <C.TableRow>
          {/* Data (toLocaleDateString -> Já modifica nossa data para padrão br) */}
        <C.TableColumn>{item.date.toLocaleDateString("pt-br")}</C.TableColumn> 

        {/* Pegamos a cor da categoria é passamos como parâmetro para utilizarmos no nosso title*/}
        <C.TableColumn> 
        <C.Category color={categories[item.category].color}> 
          {categories[item.category].title} 
        </C.Category>
        </C.TableColumn>

        <C.TableColumn>{item.title}</C.TableColumn>

          {/* Passamos como parâmetro a chave do expense: que retornar um boolean (vai determinar a cor do elemento) */}
        <C.TableColumn>
          <C.Value colors={categories[item.category].expense }>
          R$ {item.value}
          </C.Value>
        </C.TableColumn>

    </C.TableRow>



  )

}
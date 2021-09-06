
const plantList = [
    'mostera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier',{
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        isBestSale: true
    }
]

function ShoppingList(){
    return(
        <ul>
            {plantList.map((plant) => (
    <li key={ plant.id }>
        {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
    </li>
))}
        </ul>
    )
}
 
export default ShoppingList;
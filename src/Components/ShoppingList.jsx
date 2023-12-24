const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]
function ShoppingList() {
const allPlantes = plantList.map((plante,index) => {return( 
 <div key={`${plante}-${index}`}>
    <ul>
        <li>{plante}</li>
    </ul>
 </div>
)});
    return (
        <div>
            {allPlantes}
        </div>
    )
}

export default ShoppingList
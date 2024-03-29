import { Link } from "react-router-dom"

const PRODUCTS= [
    {id:1, name:"product1"},
    {id:2, name:"product2"},
    {id:3, name:"product3"},
    {id:4, name:"product4"}]

export default function ProductsPage(){
    return <>
        <h1>Products.</h1>
        <ul>
            {PRODUCTS.map(prod=>(
                <li key={prod.id}>
                    <Link 
                    to={`/products/${prod.id}`}>
                            {prod.name}
                    </Link>
                </li>
            ))}
        </ul>
        <Link to=".." relative="path">Back</Link>
    </>
}
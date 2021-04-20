import {IonRow } from '@ionic/react';
import { Product } from '../../data/Product';
import ProductListItem from '../product-list-item/ProductListItem';
import './ProductList.css';


interface ContainerProps {
  products: Product[];
}

const ProductList : React.FC<ContainerProps> = ({products }) => {

    return (
      <IonRow class="center">
      { products.map((prod) => { 
        return (<ProductListItem product={prod}  key={prod.name} />) }) 
      }
      </IonRow>
    )
};


export default ProductList;

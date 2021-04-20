import { IonCard, IonCardContent, IonCol, IonLabel, IonText } from '@ionic/react';
import { Product } from '../../data/Product';
import './ProductListItem.css';



interface ContainerProps {
  product: Product;
}


const ProductListItem: React.FC<ContainerProps> = ({ product }) => {
  
  return (
    <IonCol size-xl="3" size-lg="4" size-md="4" size-sm="6" class="center">
      <IonCard class="fit-card">
        <IonCard class="img-card">
          <img src={product.image} alt={product.name} className="img-fit" ></img>
        </IonCard>
        <IonLabel class="card-title gilroybold xxl-text" color="dark">{product.name}</IonLabel>

        <IonCardContent class="center smd-text">
          This is the short product description, followed by 3 key use cases or benefits. Lorem ipsum dolor sit amet...
          </IonCardContent>
        <IonText class="gilroybold xxl-text" color="danger">{product.price} DH</IonText>

      </IonCard>
    </IonCol>
  );
};

export default ProductListItem;

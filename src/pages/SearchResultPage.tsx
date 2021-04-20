import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import CategorySideMenu from '../components/CategorySideMenu/CategorySideMenu';
import ProductList from '../components/product-list/ProductList';
import { Category } from '../data/Category';
import { Product } from '../data/Product';
import './SearchResultPage.css';

class SearchResultPage extends React.Component {

  state = {
    products: [],
    categories: [],
    selected:''
  }

  componentDidMount() {

    const name = window.location.pathname;
    const productsUrl = 'http://localhost:8003/category'+name;
    const categoriesUrl = 'http://localhost:8003/category/list';
    
    fetch(productsUrl)
      .then((response) => response.json())
      .then((data: { products: Product[] }) => { this.setState({ products: data.products }); });

    fetch(categoriesUrl)
      .then((response) => response.json())
      .then((data: Category[]) => {
        
        this.setState({ categories: data });
      });
  }
  
  refreshProducts(data:string) {
    
    const productsUrl = 'http://localhost:8003/category/'+data;

    fetch(productsUrl)
      .then((response) => response.json())
      .then((data: { products: Product[] }) => { this.setState({ products: data.products }); });
  }



  idCallBack = (data: string) =>{
    this.refreshProducts(data);
  }


  render() {

    return (
      <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonTitle>Products by category</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonRow>

            <IonCol sizeXl="2" sizeMd="3">
              <CategorySideMenu categories={this.state.categories} callBack = {this.idCallBack}/>
            </IonCol>

            <IonCol>
              {
                this.state.products ?  (<ProductList products={this.state.products} />):null
              }
            </IonCol>

          </IonRow>
        </IonContent>

      </IonPage>
    );
  }

}


export default SearchResultPage;

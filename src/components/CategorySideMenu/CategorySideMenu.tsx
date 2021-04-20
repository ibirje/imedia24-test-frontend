import { IonAvatar, IonItem, IonLabel, IonList } from '@ionic/react';
import { useParams } from 'react-router';
import { Category } from '../../data/Category';
import CategoryTreeBranch from '../CategoryTreeBranch/CategoryTreeBranch';
import './CategorySideMenu.css';


interface ContainerProps {
  categories: Category[];
  callBack:any;
}

const CategorySideMenu: React.FC<ContainerProps> = ({ categories, callBack }) => {

  const { categoryid } = useParams<{ categoryid: string}>();
  const handleClick = (categ : Category) => { callBack(categ.name); }

  return (
    <IonList> {
      categories.map((categ) => {

        return !categ.parentcategory ?
          (<div key={categ.name}>
            <IonItem color={categ.name.toLowerCase() === categoryid?.toLowerCase() ? 'primary':''} routerLink={'/' + categ.name} 
              onClick={() => handleClick(categ)} >
              <IonAvatar><img src={categ.image} alt={categ.name} /></IonAvatar>
              <IonLabel class="textpad">{categ.name}</IonLabel>
            </IonItem>
            <CategoryTreeBranch categories={categories} parentcat={categ} callBack={callBack}/>
          </div>
          )
          : null
      })
    } </IonList>
  )
};

export default CategorySideMenu;

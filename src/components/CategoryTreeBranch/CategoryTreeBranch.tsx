import { IonAvatar, IonCheckbox, IonItem, IonLabel } from '@ionic/react';
import { useParams } from 'react-router';
import { Category } from '../../data/Category';
import './CategoryTreeBranch.css';


interface ContainerProps {
  categories: Category[];
  parentcat: Category;
  callBack:any;
}

const CategoryTreeBranch: React.FC<ContainerProps> = ({categories, parentcat, callBack  }) => {

  const { categoryid } = useParams<{ categoryid: string}>();

  return (
    <div className = "divpaddingtop"> {
      categories.map((categ) => {
        const handleClick = (categ : Category) => { callBack(categ.name); }
        
        return categ.parentcategory && categ.parentcategory.name === parentcat.name ?
          (
            <div className="divpadding" key={categ.name}>
              <IonItem class="itempadding" color={categ.name.toLowerCase() === categoryid?.toLowerCase() ? 'primary':''} 
                routerLink={'/' + categ.name} onClick={() => handleClick(categ)}>
                <IonAvatar><img src={categ.image} alt={categ.name} /></IonAvatar>
                <IonLabel class="textpad">{categ.name}</IonLabel>
                <IonCheckbox hidden= {true} checked={true} ></IonCheckbox>
              </IonItem>
              <CategoryTreeBranch categories={categories} parentcat={categ}  callBack={callBack}/>
            </div>
          )
          : null
      })
    } </div>
    
  )
};

export default  CategoryTreeBranch;

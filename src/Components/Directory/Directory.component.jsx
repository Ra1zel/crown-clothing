import CategoryItem from "../categortyItem/categoryItem.component";
import './Directory.styles.scss'
function Directory({categories}){
   return (
       <div className={'categories-container'}>
           {
               categories.map((category)=>{
                   return (<CategoryItem key={category.id} category={category}/>)
               })
           }
       </div>
   );
}

export default Directory;
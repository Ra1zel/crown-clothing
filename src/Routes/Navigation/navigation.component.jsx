import {Fragment} from "react";
import {Link, Outlet} from "react-router-dom";
import {ReactComponent as CrownSvg} from "../../../src/assets/crown.svg";
import './navigation.styles.scss'
function Navigation(){
   return (
       <Fragment>
           <div className={'navigation'}>
               <Link to={'/'} className={'logo-container'}>
                   <CrownSvg className={'logo'}/>
               </Link>
               <div className={'nav-links-container'}>
                   <Link className={'nav-link'} to={'/shop'}>SHOP</Link>
                   <Link className={'nav-link'} to={'/signIn'}>SIGN IN</Link>
               </div>
           </div>
           <Outlet/>
       </Fragment>
   );
}

export default Navigation;
import Home from "./Routes/home/home.component";
import {Routes,Route} from "react-router-dom";
import Navigation from "./Routes/Navigation/navigation.component";
import SignIn from "./Routes/sign-in/sign-in.component";


const Shop = ()=>{
    return <div>
        <h1>I am the shop component</h1>
    </div>
}
function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path={'/shop'} element={<Shop/>}/>
              <Route path={'/signIn'} element={<SignIn/>}/>
          </Route>
      </Routes>
  );
}
export default App;

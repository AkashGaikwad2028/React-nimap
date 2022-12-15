// import logo from './logo.svg';
// import Change from './Change';
// import Vidly from './Vidly';
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import React, { useContext } from 'react';
// import Counter1 from './React-Hooks/Custme-Hook/Counter1';
import About from './Router/About';
import Auth from './Router/Authitication/Auth';
import Homepage from './Router/Homepage';
import Contact from './Router/Contact';
import Order from './Router/Order';
import Products from './Router/Products';
import Item from './Router/Item';
import Login from './Router/Authitication/Login';
import Featured from './Router/Featured';
import Profile from './Router/Authitication/Profile';
// import Counter from './React-Hooks/Memo/Counter';
// import Usecallback from './React-Hooks/usecallback';
// import Parent from './React-Hooks/Callback/Parent';
// import Reducer from './React-Hooks/Reducer hook/Reducer';
// import Reducer2 from "./React-Hooks/Reducer hook/Reducer2"
// import Reducer1 from './React-Hooks/Reducer hook/Reducer1';
// import Ftechdata from './React-Hooks/Ftechdata';
// import Context from './React-Hooks/React-context/Context';
// import Context1 from './React-Hooks/React-context/Context1';
// import Hookcounter from './React-Hooks/Hookcounter';
// import Didmount from "./Lifecycle/Didmount"
// import Effect from './React-Hooks/Effect';
// import Effectunmount from './React-Hooks/Effectunmount';
// import Effectwillun from './React-Hooks/Effectwillun';
// import Usecallback from './React-Hooks/usecallback';
// import Form from './Form';
// import REf from './React-Hooks/useref/REf';
// import Usestate from './React-Hooks/Usestate';
// import { useReducer } from 'react';
// import Datafetchreducer from './React-Hooks/Reducer hook/Datafetchreducer';

//  export const UserContext=React.createContext()
//  export const ChannelContext=React.createContext()
// export const CountContext=React.createContext()
//  const  initialState=0
// const reducer=(state,action)=>{
//     switch(action){
//         case 'increment':
//         return state+1
//         case 'decrment':
//             return state-1
//         case 'reset':
//             return initialState
//             default :
//             return state
//     }
// }
function App() {
  // const [count,dispatch]=useReducer(reducer,initialState)
  return (
  <Auth>
    {/* // <CountContext.Provider  value={{countState:count,countDispatch:dispatch}}> */}
    <div className="App">
    {/* <Vidly/> */}
    {/* <Form/> */}
    {/* <Usestate/> */}
     {/* <Didmount/> */}
     {/* <Effect/> */}
    {/* Lifecycel */}
  {/* <Effectunmount/> */}
  {/* <Effectwillun/> */}
  {/* <Hookcounter/> */}
  {/* <Ftechdata/> */}



     {/* {Nested usecontext} */}

    {/* <UserContext.Provider value={"Jhonny Depp"}>
      <ChannelContext.Provider value={"Iron Man"}>
      <Context1/> 
      </ChannelContext.Provider>
    </UserContext.Provider> */}
    {/* <Reducer/> */}
    {/* <Reducer1/> */}
    {/* count-{count} */}
    {/* <Reducer/> */}
    {/* <Reducer2/> */}
    {/* <Datafetchreducer/> */}
    {/* <REf/> */}
              {/* [Callback] */}
              {/* <Parent/> */}
              {/* <Counter/> */}
              {/* <Counter1/> */}
              <Routes>
                <Route path='/' element={<Homepage></Homepage>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/order' element={<Order/>}/>
                <Route path='/products' element={<Products/>}>
                  <Route index element={<Featured/>}/>
                  <Route path='featured' element={<Featured/>}/>
                  <Route path='item' element={<Item/>}/>
                </Route>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/login' element={<Login/>}/>
              </Routes>
  </div>
  {/* // </CountContext.Provider> */}
  </Auth>
  );
}

export default App;

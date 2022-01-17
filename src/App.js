import React, { useState } from 'react'
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import ReducerCount from './components/ReducerCount';
import store from '../src/components/store/store';
import {
  BrowserRouter,
Switch,
  Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/Layout/index'
import TopBar from './components/Layout/Topbar'
import Task2 from './components/Taskno2/Task2'
import Task1 from './components/Taskno1/Task1'
// import Header from 'components/ExpenseTracker/Header'
// import Balance from 'components/ExpenseTracker/Balance'
// import IncomeExpenses from 'components/ExpenseTracker/IncomeExpenses'
// import TransactionList from 'components/ExpenseTracker/TransactionList'
// import AddTransaction from 'components/ExpenseTracker/AddTransaction'
// import { GlobalProvider } from 'components/ExpenseTracker/Context/GlobalState'
// import Testingcs from './components/ForTestingcss/Testingcs'

function App() {
  const [showSideBar, setshowSideBar] = useState(false)
  const mainMenu = () => {
    setshowSideBar(true)
  }
  const closeMenu = () => {
    setshowSideBar(false)
  }
  // const store= createStore(ReducerCount)
  return (
    <>
    {/* <Testingcs/> */}

    {/* <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      </GlobalProvider>
       */}



<Provider  store={store}>
<BrowserRouter>
        <TopBar mainmenu={mainMenu} closeMenu={closeMenu} show={showSideBar} />
        <MainPage show={showSideBar} />
        <Switch>
          <Route path="/" exact={true} component={Task1} />
          <Route path="/task2" exact={true}  component={Task2} />
          </Switch>
      </BrowserRouter>


</Provider>
   
    </>
  )
}
export default App

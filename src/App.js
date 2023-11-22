import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import EnterInventory from './components/EnterInventory';
import InventoryList from './components/InventoryList';
import EditInventoryQuantity from './components/EditInventoryQuantity';
import React from 'react';
import Home from './components/Home';
import Login from './components/signup';


function App() {
  return (
    <div className="App">
      
      <HashRouter>
      
        

        <Nav />
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          
          <Route path="/Enter-Inventory" element={<EnterInventory />} />
          <Route path="/inventory-list" element={<InventoryList />} />
          <Route path="/edit-inventory/:id" element={<EditInventoryQuantity />} />
         
      </Routes>
      </HashRouter>
      
     
    </div>

  );
  
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import SideBar from './Components/SideBar/SideBar.js';
import DataSearch from './Pages/DataSearch/DataSearch';
import ProductInformation from './Pages/ProductInformation/ProductInformation';
import Subimage from './Pages/Subscriptions/Sub-image/Sub-image';
import Subscription_Main from './Pages/Subscriptions/Subscription_Main/Subscription_Main';

function App() {
  return (
    <div className="App"><Routes>
    <Route
      path="/datasearch"
      element={
        // <PrivateRoute>
        <DataSearch />
        // </PrivateRoute>
      }
    />
    <Route
      path="/Subimage"
      element={
        // <PrivateRoute>
        <Subimage />
        // </PrivateRoute>
      }
    />
    <Route
      path="/"
      element={
        <LandingPage />
      }
    />
    <Route
      path="/:Product_definition/Product_information"
      element={
        <ProductInformation />
      }
    />
    <Route
      path="/subscriptions"
      element={
        <Subscription_Main/>
      }
    />
  </Routes>
  <div>
      <SideBar />
  </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

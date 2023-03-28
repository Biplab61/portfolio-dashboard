import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LeftSideBar from './Components/LeftSideBar.js'
import Main from './Components/Main';
import axios from 'axios';
import PreLoader from './Components/PreLoader';
import RightSide from './Components/RightSide';
import Projects from './Components/RoutesComponents/Projects';
import Education from './Components/RoutesComponents/Education';
import Experience from './Components/RoutesComponents/Experience';
import Profile from './Components/RoutesComponents/Profile';
import ProjectDetails from './Components/RoutesComponents/ProjectDetails';
import { baseURL } from './baseURL';
import LoginPage from './Components/RoutesComponents/LoginPage';
import ProtectedRoute from './Components/RoutesComponents/ProtectedRoute';
import AddForm from './Components/AddForm';


function App() {


  const [toggle, setToggle] = useState(false);
  const [allData, setAllData] = useState(null);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let local = localStorage.getItem("token");
    if (local !== null) {
      setIsLogin(true);
    }
  }, []);


  useEffect(() => {
    const fetchApi = async () => {
      await axios.get(`${baseURL}/getall`)
        .then((response) => {
          setAllData(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }

    if (isLogin) {
      fetchApi();
    }
  }, [isLogin])


  return (
    <>
      <div className="container" style={isLogin ? null : { gridTemplateColumns: "auto" }}>
        <BrowserRouter>
          {
            isLogin && allData ? <LeftSideBar setToggle={setToggle} toggle={toggle} isLogin={isLogin} setIsLogin={setIsLogin} /> : null
          }

          <Routes>

            <Route exact path="/" element={<ProtectedRoute Component={Main} data={allData} />} />


            <Route exact path="/projects" element={<ProtectedRoute Component={Projects} data={allData} />} />
            <Route exact path="/clients" element={<ProtectedRoute Component={PreLoader} data={allData} />} />
            <Route exact path="/education" element={<ProtectedRoute Component={Education} data={allData} />} />
            <Route exact path="/experience" element={<ProtectedRoute Component={Experience} data={allData} />} />
            <Route exact path="/profile" element={<ProtectedRoute Component={Profile} data={allData} />} />
            <Route exact path="/add-project" element={<ProtectedRoute Component={AddForm} data={allData} />} />
            <Route exact path="/project/:id" element={<ProtectedRoute Component={ProjectDetails} data={allData} />} />
            <Route exact path="/add" element={<ProtectedRoute Component={AddForm} data={allData} />} />


            <Route exact path="/login" element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />} />
          </Routes>
          {
            isLogin !== false && allData ?
              <RightSide data={allData} setToggle={setToggle} toggle={toggle} /> : null
          }


        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

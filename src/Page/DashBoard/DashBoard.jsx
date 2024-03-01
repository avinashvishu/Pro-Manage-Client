import React, { useContext, useState } from 'react';
import Nav from '../../components/NavBar/Nav';
import style from './DashBoard.module.css'
import DashnavigateContext from '../../context/NavigateDashboard/DashnavigateContext';
import Board from '../../components/Board/Board'
import Analytics from '../../components/Analytics/Analytics';
import SettingView from '../../components/SettingView/SettingView';
import PopUp from '../../components/Modal/PopUp';
import CreateTaskContext from '../../context/CreateTask/CreateTaskContext';
import CreateTaskModal from '../../components/CreateTaskModal/CreateTaskModal';
import EditTaskContext from '../../context/EditTask/EditTaskContext';
import EditTask from '../../components/EditTaskModal/EditTask';


const DashBoard = () => {
  const {isSelected,OpenClosePopUp,ConfirmLogout,Logout}=useContext(DashnavigateContext);
  const {toggleCreateTask}=useContext(CreateTaskContext)
  const {toggleEditTask}=useContext(EditTaskContext);
  return (
    <div className={style.body}>
        
        <Nav/>
        {isSelected==="Board"?<Board/>:isSelected==="Analytics"?<Analytics/>:<SettingView/>}
        {OpenClosePopUp?<PopUp yes={Logout} no={ConfirmLogout} text={"Logout"}/>:null}
        {toggleCreateTask?<CreateTaskModal/>:null}
        {toggleEditTask?<EditTask/>:null}
        
    </div>
  )
}

export default DashBoard
import DeleteTaskContext from "./DeleteTaskContext";
import { DeleteTask } from "../../apis/TaskApi";
import CreateTaskContext from "../CreateTask/CreateTaskContext";
import { useContext,useState } from "react";


const DeleteTaskState = (props) => {

    const [deletePopUP, setdeletePopUP] = useState(false);
    const {newtask,setnewTask}=useContext(CreateTaskContext)
    const [id,setId]=useState()

    const Delete =async()=>{
      try {
        const response = await DeleteTask(id);
        if(response){
          await setnewTask(newtask+1)
          setdeletePopUP(!deletePopUP);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  
    }
  

  return (
    
    <DeleteTaskContext.Provider value={{deletePopUP,setdeletePopUP,Delete,setId}}>
        {props.children}
    </DeleteTaskContext.Provider>
  )
}

export default DeleteTaskState
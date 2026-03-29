import React ,{useState,useEffect} from 'react'
import {addEmployee,editEmployee} from './service'
const Form = ({selectedEmp,refreshList}) => {
    const [emp, setEmp] = useState({id : null,name:"", role:"", salary:0})
    let [cnt , setCnt] = useState(0)
    let [action , setAction] = useState(true)
    const handleChange = (e) => {
        let {name, value} = e.target
        setEmp({...emp, 
    [name]: name=== "salary" ? Number(value) : value})
    }   
    const handleSubmit = (e) => {
        e.preventDefault()
        if(emp.id){
            editEmployee(emp.id, emp).then((response) => {
                console.log(response.data);
                alert("Employee updated successfully");
                refreshList();
                setEmp({id : null,name:"", role:"", salary:0})
                setAction(true);
            }).catch((error) => {
                console.log(error);
                alert("Error updating employee");
            });
        }
        else{
            addEmployee(emp).then((response) => {
                console.log(response.data);
                alert("Employee added successfully");
                refreshList();
                setEmp({id : null,name:"", role:"", salary:0})
            }).catch((error) => {
                console.log(error);
                alert("Error adding employee");
            });
        }
        } 
        
    useEffect(() => {
        if (selectedEmp) {
            setEmp(selectedEmp);
            selectedEmp.id ? setAction(false) : setAction(true);
        }
    }, [selectedEmp]);
    return (
        <center>
            <div>
      <h2>{action ? "Add Employee" : "Edit Employee"}</h2>

      <form onSubmit={handleSubmit}>
        {!action && <input type="hidden" name="id" value={emp.id} />}
        <p>Enter Name</p> : <input type="text" name="name" value={emp.name} onChange={handleChange} /> <br /><br />
        <p>Enter Role</p> : <input type="text" name="role" value={emp.role} onChange={handleChange} /> <br /><br />
        <p>Enter Salary</p> : <input type="text" name="salary" value={emp.salary} onChange={handleChange} /> <br /><br />
        <button type="submit">{action ? "Add Employee" : "Update Employee"}</button>
      </form>
    </div>
        </center>
  )
}

export default Form

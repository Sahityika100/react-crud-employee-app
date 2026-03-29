import { useState ,useEffect} from "react"
import { getEmployees,deleteEmployee} from "./service"

const ShowEmp = ({setEmp1,refresh}) => {

    const[emps , setEmps] = useState([])
    const loadEmps = () => {
        getEmployees().then((response) => {
            setEmps(response.data)
        }).catch((error) => {
            console.log(error);
            alert("Error fetching employees")
        })
    }
    useEffect(() => {
        loadEmps();
    }, [refresh])

    const deleteEmp = (id) => {
        deleteEmployee(id).then((response) => {
            console.log(response.data);
            alert("Employee deleted successfully");
            loadEmps(); 
        }).catch((error) => {
            console.log(error);
            alert("Error deleting employee");
        });

    }
  return (
    <div>
      <center>
        <h2>Employee</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {emps.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.role}</td>
                        <td>{emp.salary}</td>
                        <td><button onClick={()=>{deleteEmp(emp.id)}}>Delete</button>
                        <button onClick={()=>{setEmp1(emp)}}>Edit</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
      </center>
    </div>
  )
}

export default ShowEmp

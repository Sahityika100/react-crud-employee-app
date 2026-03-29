import axios from 'axios'
export const addEmployee = (emp) => {
   return axios.post("http://localhost:9090/emp/addEmp", emp)
}
export const getEmployees = () => {
    return axios.get("http://localhost:9090/emp/showAllEmp")
}
export const deleteEmployee = (id) => {
    return axios.delete(`http://localhost:9090/emp/deleteEmp/${id}`)
}
export const editEmployee = (id,emp) => {
    return axios.put(`http://localhost:9090/emp/updateEmp/${id}`, emp)
}

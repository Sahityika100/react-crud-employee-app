import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import ShowEmp from './components/ShowEmp'
function App() {

  const [selectedEmp, setSelectedEmp] = useState(null)
  let [refresh , setRefresh] = useState(false)

  const refreshList = () => {
    setRefresh(!refresh)
  }
  return (
    <>
      <div>
        <h1>Employee CRUD App</h1>
        <Form selectedEmp={selectedEmp} refreshList={refreshList} />
        <ShowEmp setEmp1={setSelectedEmp} refresh={refresh} />
      </div>
    </>
  )
}

export default App

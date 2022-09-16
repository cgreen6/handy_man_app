import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkerForm from './WorkerForm';

const Workers = () => {
  const [workers, setWorkers] = useState([])

  useEffect( () => {
    axios.get('/api/workers')
      .then( res => setWorkers(res.data))
      .catch( err => console.log(err))
  }, [])

  const addWorker = (worker) => {
    axios.post('/api/workers', { worker })
      .then( res => setWorkers([...workers, res.data]))
      .catch( err => console.log(err))
  }

  const updateWorker = (id, worker) => {
    axios.put(`/api/workers/${id}`, { worker })
      .then( res => {
        const newUpdatedWorkers = workers.map( l => {
          if (l.id == id) {
            return res.data
          }
          return l
        })
        setWorkers(newUpdatedWorkers)
      })
      .catch( err => console.log(err))
  }

  const deleteWorker = (id) => {
    axios.delete(`/api/workers/${id}`)
      .then( res => {
        setWorkers(workers.filter( l => l.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <WorkerForm addWorker={addWorker} />
      <h1>All Workers</h1>
      <AllWorker 
        workers={workers}
        updateWorker={updateWorker}
        deleteWorker={deleteWorker}
      />
    </>
  )
}

export default Workers;
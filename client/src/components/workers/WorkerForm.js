import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker, id, title, desc, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ title: '', desc: '' })

  useEffect( () => {
    if (id) {
      setWorker({ title, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }
    setWorker({ title: '', desc: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Create'} List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='title'
          value={list.title}
          onChange={(e) => setWorker({ ...worker, title: e.target.value })}
          required
          placeholder='Worker name'
        />
        <textarea
          name='desc'
          value={worker.desc}
          onChange={(e) => setWorker({ ...worker, desc: e.target.value })}
          required
          placeholder='description'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default WorkerForm;
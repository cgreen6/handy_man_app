import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, title, desc, updateService, setEdit }) => {
  const [service, setService] = useState({ title: '', desc: '' })

  useEffect( () => {
    if (id) {
      setService({ title, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id, service)
      setEdit(false)
    } else {
      addService(service)
    }
    setService({ title: '', desc: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Create'} List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='title'
          value={worker.title}
          onChange={(e) => setService({ ...worker, title: e.target.value })}
          required
          placeholder='Service name'
        />
        <textarea
          name='desc'
          value={service.desc}
          onChange={(e) => setService({ ...service, desc: e.target.value })}
          required
          placeholder='description'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ServiceForm;
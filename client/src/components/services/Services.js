import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';


const Services = () => {
  const [services, setServices] = useState([])

  useEffect( () => {
    axios.get('/api/services')
      .then( res => setServices(res.data))
      .catch( err => console.log(err))
  }, [])

  const addService = (service) => {
    axios.post('/api/services', { service })
      .then( res => setServices([...services, res.data]))
      .catch( err => console.log(err))
  }

  const updateService = (id, service) => {
    axios.put(`/api/services/${id}`, { service })
      .then( res => {
        const newUpdatedServices = services.map( l => {
          if (l.id == id) {
            return res.data
          }
          return l
        })
        setServices(newUpdatedServices)
      })
      .catch( err => console.log(err))
  }

  const deleteService = (id) => {
    axios.delete(`/api/services/${id}`)
      .then( res => {
        setServices(services.filter( l => l.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <ServiceForm addService={addService} />
      <h1>All Services</h1>
      <AllService 
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />
    </>
  )
}

export default Services;
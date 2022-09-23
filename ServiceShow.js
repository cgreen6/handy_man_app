import Moment from 'react-moment';
import { useState } from 'react';
import ServiceForm from './ServiceForm';
import { Link } from 'react-router-dom';

const ServiceShow = ({ id, title, desc, updateService, deleteService }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <ServiceForm 
            updateService={updateService}
            id={id}
            title={title}
            desc={desc}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <div>
          <h1> {title} {desc}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteService(id)}>
            Delete
          </button>
          <Link
            to={`/${id}/service`} //path of where its going to 
            // id the list id
            state={{ ServiceTitle: title }}
            // state only read only value to pass to the page
          >
            <button>Comments</button>
          </Link>
        </div>
      }
      <h1 />
    </>
  )
}

export default ServiceShow;
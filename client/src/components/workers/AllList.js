import WorkerShow from './WorkerShow';

const AllWorker = ({ workers, updateWorkers, deleteWorkers }) => (
  <>
    {
      workers.map( l => 
        <WorkerShow
          key={l.id}
          // id={l.id} title={l.title} desc={l.desc}
          {...l}
          updateWorker={updateWorker}
          deleteWorker={deleteWorker}
        />
      )
    }
  </>
)

export default AllList;
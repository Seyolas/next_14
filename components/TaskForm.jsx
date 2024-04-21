import { createTask } from "@/utils/action";


const TaskForm = () => {
  return (
// the action automatically receives the FormData object.
    <form action={createTask} >
      <div className='join w-full'>
        <input
          type='text '
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        />
        <button type='submit' className='btn btn-primary join-item'>
          create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm

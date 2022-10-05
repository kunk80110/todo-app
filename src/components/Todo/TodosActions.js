import { RiDeleteBin2Line, RiRestartLine } from 'react-icons/ri';
import Button from '../Button/Button';
function TodosActions({
  deleteAllTodos,
  deleteCompletedTodos,
  completedTodos,
}) {
  return (
    <>
      <Button title={'Delete all todos'} onClick={deleteAllTodos}>
        <RiRestartLine />
      </Button>
      <Button
        title={'Delete completed todos'}
        onClick={deleteCompletedTodos}
        disabled={!completedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;

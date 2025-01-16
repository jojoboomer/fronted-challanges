import { css } from "@styled-system/css";
import { listFooter } from "@styles/todo";
import useTodoStore from "src/store/todoStore";

export const ListFooter = () => {
  const { taskList, deleteAllComplete } = useTodoStore();

  return (
    <div className={listFooter}>
      <span>
        {`${
          taskList.filter((task) => !task.completed && task.active).length
        } items left`}
      </span>
      <div className={css({display:{base:'none',md:'block'}})}><Filters /></div>
      <button onClick={() => deleteAllComplete()}>Clear Completed</button>
    </div>
  );
};

export const Filters = () => {
  const { setFilters } = useTodoStore();

  return (
    <div className="filter">
      <input
        type="radio"
        id="all"
        name="filter"
        value="all"
        defaultChecked
        onChange={(e) => setFilters({ status: "all" })}
      />
      <label htmlFor="all">All</label>
      <input
        type="radio"
        id="active"
        name="filter"
        value="active"
        onChange={(e) => setFilters({ status: "active" })}
      />
      <label htmlFor="active">Active</label>
      <input
        type="radio"
        id="completed"
        name="filter"
        value="completed"
        onChange={(e) => setFilters({ status: "completed" })}
      />
      <label htmlFor="completed">Completed</label>
    </div>
  );
};

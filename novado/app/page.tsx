'use client'
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import AddTask from "./Components/AddTask/AddTask";
import Summary from "./Components/Summary/Summary";
import Empty from "./Components/Empty/Empty";
import Task from "./Components/Task/Task";
import { taskApi } from "./taskApi";

export default function Home() {
  const { useTasksData } = taskApi;
  const { data, mutate } = useTasksData<any[]>();

  const generateTasks =() => {
    const array = [];
    for (let i = 0; i < data?.length; i++) {
      array.push(<Task done={data[i].done} name={data[i].name} />)
    }
    console.log(array)
    return array;
  }

  console.log(data)

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <AddTask mutate={mutate} />
        <Summary />
        {data?.map((task) => <Task done={task.done} name={task.name} />)}
      </div>
    </div>
  );
}

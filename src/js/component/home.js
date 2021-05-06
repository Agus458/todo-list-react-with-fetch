import React, { useState, useEffect } from "react";
import TasksList from "./TasksList";
import TaskInput from "./TaskInput";
import TodoFooter from "./TodoFooter";

export function Home() {
	const [tasksList, setTasksList] = useState([]);
	const [cantTasks, setCantTasks] = useState(0);

	function addTask(task) {
		let newTask = { label: task, done: false };
		setTasksList([...tasksList, newTask]);
		setCantTasks(cantTasks + 1);
	}

	function removeTask(pos) {
		setTasksList(
			tasksList.filter((task, index) => {
				return index != pos;
			})
		);
		setCantTasks(cantTasks - 1);
	}

	return (
		<div className="container text-center">
			<h1>todos</h1>
			<div className="card brown shadow-lg">
				<TaskInput cantTasks={cantTasks} addTask={addTask} />
				<TasksList tasksList={tasksList} removeFromList={removeTask} />
				<TodoFooter cantTasks={cantTasks} />
			</div>
		</div>
	);
}

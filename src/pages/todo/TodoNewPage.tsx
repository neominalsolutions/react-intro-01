// wrapper
// url: /todos

import { useState } from 'react';
import ItemAdd from './components/ItemAdd';
import TodoList from './components/TodoList';
import { Todo } from './models/Todo';

// parent component
function TodoNewPage() {
	const [todos, setTodos] = useState<Todo[]>([]); // ref type

	return (
		<>
			<ItemAdd
				text="deneme"
				onItemAdded={(text: string) => {
					console.log('guncel text', text);

					const todo: Todo = {
						id: todos.length + 1,
						title: text,
						completed: false,
					};

					setTodos([todo, ...todos]); // render başlattı
				}}
			/>

			<hr></hr>
			{/* todos değer güncel todos oldu */}
			<TodoList
				items={todos}
				onStatusChange={() => {
					setTodos([...todos]);
				}}
			/>
		</>
	);
}

export default TodoNewPage;

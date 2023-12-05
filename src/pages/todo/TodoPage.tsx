import { useState } from 'react';

// ilgili örnek gerekli olan state
type TodoState = {
	id: number;
	title: string;
	completed?: boolean;
};

function TodoPage() {
	const [title, setTitle] = useState<string>(''); // value type
	const [todos, setTodos] = useState<TodoState[]>([]); // ref type

	console.log('... rendering');

	const onInputChange = (e: any) => {
		// inputun güncel value değerini üzerinde tutsun
		console.log('e', e.target.value);
		setTitle((e.target.value as string).trim());
	};

	const onItemAdd = () => {
		const todo: TodoState = {
			id: todos.length + 1,
			title: title,
			completed: false,
		};

		//setTodos([...todos, todo]); // prepend virtual dom güncellemesini tetikle

		// todos.push(todo);
		// setTodos(todos); // invalid

		todos.push(todo);
		setTodos([...todos]); // valid
		setTitle('');
	};

	const onComplete = (id: number) => {
		const result = window.confirm('Tamamlamak istediğinize emin misiniz?');

		if (result) {
			const currentState = todos.find((x) => x.id === id);

			if (currentState) {
				currentState.completed = true;
				setTodos([...todos]);
			}
		}
	};

	return (
		<>
			<div>
				<p>Title: {title}</p>
				{/* two way binding */}
				<input
					value={title}
					onChange={onInputChange}
					placeholder="eklenecek"
				/>{' '}
				<button onClick={onItemAdd}>Ekle</button>
			</div>
			<hr></hr>

			<div>
				{/*net mvc @foreach örneğinin benzeri*/}
				<table border={1} width={'100%'}>
					<thead>
						<tr>
							<th>Id</th>
							<th>Title</th>
							<th>Completed</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((item: TodoState) => {
							return (
								// JSX template return ettik.
								// itemlar içerisinde map ile dönerken key prop değerini unutmuyoruz.
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.title}</td>
									<td>
										{item.completed ? ' Yapıldı ' : ' Yapılmadı '}
										{!item.completed && (
											<button onClick={() => onComplete(item.id)}>
												Tamamla
											</button>
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default TodoPage;

import { useState } from 'react';
import { Todo } from '../models/Todo';

type TodoListProps = {
	items: Todo[];
	onStatusChange: () => void;
};

// child component
function TodoList({ items, onStatusChange }: TodoListProps) {
	const onComplete = (id: number) => {
		const result = window.confirm('Tamamlamak istediğinize emin misiniz?');

		if (result) {
			const currentState = items?.find((x) => x.id === id);

			if (currentState) {
				currentState.completed = true;
				// list component logic olduğundan burada referansın değerini güncelledik.
				onStatusChange();
			}
		}
	};

	return (
		<table border={1} width={'100%'}>
			<thead>
				<tr>
					<th>Id</th>
					<th>Title</th>
					<th>Completed</th>
				</tr>
			</thead>
			<tbody>
				{items &&
					items.map((item: Todo) => {
						return (
							// JSX template return ettik.
							// itemlar içerisinde map ile dönerken key prop değerini unutmuyoruz.
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>
									{item.completed ? ' Yapıldı ' : ' Yapılmadı '}
									{!item.completed && (
										<button onClick={() => onComplete(item.id)}>Tamamla</button>
									)}
								</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
}

export default TodoList;

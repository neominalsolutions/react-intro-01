import { useState } from 'react';

type ItemAddProps = {
	text?: string;
	onItemAdded: (text: string) => void; // eventargs olarak güncel text state değerini emit edeceğiz
};

// child component
function ItemAdd(props: ItemAddProps) {
	const [text, setText] = useState<string>(props.text || ''); // value type

	const onInputChange = (e: any) => {
		// inputun güncel value değerini üzerinde tutsun
		console.log('e', e.target.value);
		setText((e.target.value as string).trim());
	};

	const onItemAdd = () => {
		if (props.onItemAdded) {
			// event bind edildiyse veri fırlat
			props.onItemAdded(text); // güncel text state component içerisinde fırlatıyoruz.
			// Not: component içindeki state local olduğundan bunu component dışına fırlatmak için action props yapısı kullanılır.
		}
	};

	return (
		<div>
			<p>Text: {text}</p>
			{/* two way binding */}
			<input
				value={text}
				onChange={onInputChange}
				placeholder="eklenecek"
			/>{' '}
			<button onClick={onItemAdd}>Ekle</button>
		</div>
	);
}

export default ItemAdd;

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponentSample from './samples/ClassComponentSample';
import TodoPage from './pages/todo/TodoPage';
// Function Componentlerde lifecyle method yok bunun yerine özel function ifadeleri yani hook yapıları kullanılıyor.
// function component state takibi useState hook ile geçekleşir.
// array deconstructon.
// visible => getter
// setVisible => setter ifadesini temsil eder.
function App() {
	const [visible, setVisible] = useState<boolean>();
	const [random, setRandom] = useState<number>(0);

	// useEffect(() => {
	// 	// callback function
	// 	console.log('visible-state', visible);
	// }, [visible]); // [...state] takip edilecek state listesi

	// useEffect(() => {
	// 	// callback function
	// 	console.log('random-state', visible);
	// }, [random]); // [...state] takip edilecek state listesi

	// useEffect(() => {
	// 	// callback function
	// 	console.log('random-state', visible);
	// }, [random, visible]); // [...state] random veya visible değişiminde tetiklen.

	// useEffect(() => {
	// 	// callback function
	// 	console.log('random-state', visible);
	// }, []); // [...state] her hangi bir state değişimini dinlemeyiz.

	const onVisibleChange = () => {
		// arrow function
		// Not: class olmadığı için this keyword kullanımı ve method bind gibi süreçler yok.
		// aşağıdaki gibi bir kod ihtiyacımız yok
		// this.increase = this.increase.bind(this);
		// visible = !visible; invalid state sadece setter ile güncellenir.
		setVisible(!visible);
		console.log('visible', visible);
	};
	// 3 farklı yöntem ile state değişiminde component domda görünü görünmesini sağlayabiliri. if && veya ternary if
	// if (visible) {
	// 	return (
	// 		<>
	// 			State: {visible}
	// 			<div className="App">
	// 				<button onClick={onVisibleChange}>Visible/Not Visible</button>
	// 				<ClassComponentSample />
	// 			</div>
	// 		</>
	// 	);
	// } else {
	// 	return (
	// 		<div className="App">
	// 			State: {visible}
	// 			<button onClick={onVisibleChange}>Visible/Not Visible</button>
	// 			<h1>App Component</h1>
	// 		</div>
	// 	);
	// }

	// 2.yöntem
	// return (
	// 	<>
	// 		<div className="App">
	// 			<button onClick={onVisibleChange}>Visible/Not Visible</button>
	// 			{visible ? (
	// 				<>
	// 					<ClassComponentSample />
	// 				</>
	// 			) : (
	// 				<></>
	// 			)}
	// 		</div>
	// 	</>
	// );

	//3.yöntem else durumunda bir çıktı yoksa aşağıdaki condition ifadesi kullanılabilir.
	// <a href='www.google.com' title='sdsasd'></a>
	return (
		<>
			<div className="App">
				<button onClick={onVisibleChange}>Visible/Not Visible</button>
				{/* {(random === 1 || visible) && <ClassComponentSample />} */}
				{/* {(random === 1 && visible) && <ClassComponentSample />} */}
				{/* {visible && <ClassComponentSample title="component1" count={1} />}
				{visible && <ClassComponentSample title="component2" count={3} />} */}
				<TodoPage />
			</div>
		</>
	);
}

export default App;

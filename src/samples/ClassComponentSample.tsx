import { Component, Fragment, ReactNode } from 'react';

type CounterState = {
   count:number; // 0
}
class ClassComponentSample extends Component {
    state!:CounterState; // ! undefinded değer tanımları için kullanılır
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props:any){
        super(props);
        this.state.count = 0; // initial state değeri
    }
	render(): ReactNode { // component doma ilk girişinde tetiklenir.
		console.log('...rendering');
		return (
			<>
				<div>Sayaç: {this.state.count}</div>
				<div>Div2</div>
			</>
		);
	}
}

export default ClassComponentSample;

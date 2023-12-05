import { Component, Fragment, ReactNode } from 'react';

type CounterState = {
	count: number; // 0
};
class ClassComponentSample extends Component {
	state!: CounterState; // ! undefinded değer tanımları için kullanılır
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(props: any) {
		super(props);
		console.log('constructor');
		// state initial değer atama constructor üzerinden verilir.
		this.state = { count: 1 }; // state initial değer aktarma işlemi
		// state değişimi olan methodları class component içerisinde contructorda initialize ediyoruz.
		this.increase = this.increase.bind(this); // react class component state değişiminde method binding yapmamız gerekir.
	}

	increase() {
		// // invalid kullanım

		// Not: Eğer bir method içerisinde state bir müdehale söz konusu ise state bir güncelleme yapacak isek direk methodu çağıramayız. callback hatası alırız.
		// aşağıdaki kod bloğunda virtual dom yeniden oluşması için render tetiklenmiyor. react'a ait özel bir durum. virtual dom yeniden oluşması için setState methodu kullanmak gerekiyor.
		// this.state = { count: this.state.count + 1 }; // invalid
		// this.state.count = this.state.count + 1; // invalid
		// console.log('state-count', this.state.count);
		this.setState({ ...this.state, count: this.state.count + 1 }, () => {
			// callback yapısı ile bulma
			console.log('güncel-state', this.state.count);

			// state takibine göre belirli bir logic çalıştırığımız yer.
			if (this.state.count > 2) {
				alert('count 2 den büyük oldu');
			}
		}); // spread operatörü ile state güncelleme
		console.log('state', this.state);
		alert('Deneme');
		// Not: SetState sonrası tekrar render life-cycle method çalışır.
		// Not: setState güncellemesi asenkron çalışır.
	}

	componentDidMount(): void {
		console.log('componentDidMount');
		// component doma ilk girdiği anda çalışır
		// Not: eğer burada bir state güncellemesi yapılırsa.
		// tekrardan rendering süreci başlar.
		// renderdan sonra çalışan tetiklenen ilk lifecycle method'tur.
	}

	// state değişiminde tetiklenir.
	componentDidUpdate(
		prevProps: Readonly<{}>,
		prevState: Readonly<{}>,
		snapshot?: any
	): void {
		// console.log('güncel state with lifecyle methods', this.state);
		console.log('componentDidUpdate', prevState);
		// bir önceki state yada prop değerlerini yakalayabiliriz.
	}

	render(): ReactNode {
		// component doma ilk girişinde tetiklenir.
		console.log('...rendering');
		return (
			<>
				<div>Sayaç: {this.state.count}</div>
				<div>
					<button onClick={this.increase}>(+)</button>
				</div>
			</>
		);
	}
}

export default ClassComponentSample;

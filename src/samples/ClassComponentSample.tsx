import { Component, Fragment, ReactNode } from 'react';

// Her componentin kendine özgü props değeri olduğu için propslar component bazlı oluşturulular.
type ClassComponentProps = {
	count: number; // required
	title?: string; // props üzerinden bu değerler gönderilmek zorunda değil
};

// state de componentin local state durumunu yönettiği için burasıda component bazlı tanımlanır.
type CounterState = {
	count: number; // 0
};
// Not: State yapılarına initial değerleri paremetreik olarak aktarmamızı sağlayan component'e dışarıdan attribute olarak gönderilen değerler props diyoruz
class ClassComponentSample extends Component<
	ClassComponentProps
> {
	state!: CounterState; // ! undefinded değer tanımları için kullanılır
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(props:ClassComponentProps) {
		super(props);
		console.log('constructor');
		// state initial değer atama constructor üzerinden verilir.
		this.state = { count: this.props.count }; // state initial değer aktarma işlemi
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

		// readOnly olduğu için props değeri set edemiyoruz.
		//this.props.title = 'title15'; invalid.
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

	componentWillUnmount(): void {
		console.log('componentWillUnmount');
		// Not: Component domdan çıktığında tetiklenir.
		// clean up işlemlerini burada yaparız.
	}

	render(): ReactNode {
		// component doma ilk girişinde tetiklenir.
		console.log('...rendering');
		return (
			<>
				<h1>{this.props.title}</h1>
				<div>Sayaç: {this.state.count}</div>
				<div>
					<button onClick={this.increase}>(+)</button>
				</div>
			</>
		);
	}
}

export default ClassComponentSample;

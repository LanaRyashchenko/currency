import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class MyCurrency extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }

componentDidMount() {
  fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  .then((response) => response.json())
.then((res) => {
    this.setState({
        items: res
      });
});
}

render() {
    const { items } = this.state;
    console.log(items)
	return (
        <header>
            <div className="container">
        <ul className="currency__list">
        {Array.from(items).map(item => (
          <li>
         {item.base_ccy} {item.ccy}  {item.buy} {item.sale}
          </li>
        ))}
      </ul>
      </div>
      </header>
    );
}
}
ReactDOM.render(
    <MyCurrency />, document.getElementById('root'),
)

 


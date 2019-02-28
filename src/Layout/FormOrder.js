import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class FormOrder extends Component {
    state = {
        name: "",
        addres: "",
        phone: "",
        where: "pickup",
    }

    orderClick = () => {
        this.props.createOrder(this.state)
    }


    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        //  console.log(name, type, e.target.value)

        this.setState({
            [name]: e.target.value
        })
    }
    render() {
        const order = this.props.composition;
        const cost = this.props.price;
        return (
            <div id="form" className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Twoje zamówienie numer 3443</h5>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="bg-light">
                                <h3>Składniki:</h3>
                                <ul className="" style={{
                                    padding: "0",
                                }}>

                                    {Object.keys(order).map(item => {
                                        if (order[item] > 0) {
                                            return (<li key={item} className="list-group-item"> {item} - {order[item]}</li>)
                                        }
                                    })}

                                </ul>
                            </div>
                            <form>
                                <div className="form-group">
                                    <div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input onClick={this.handleChange} name="where" id="radio_0" type="radio" className="custom-control-input" value="pickup" checked={this.state.where === "pickup" ? true : false} />
                                            <label htmlFor="radio_0" className="custom-control-label">odbiór osobisty</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input onClick={this.handleChange} name="where" id="radio_1" type="radio" className="custom-control-input" value="delivery"
                                                checked={this.state.where === "delivery" ? true : false}
                                            />
                                            <label htmlFor="radio_1" className="custom-control-label">dowóz pod adres</label>
                                        </div>
                                    </div>
                                </div>

                                {/* dane */}

                                <div className="form-group">
                                    <label></label>
                                    <input id="name" onChange={this.handleChange} name="name" placeholder="imię i nazwisko " type="text" className="form-control" value={this.state.name} />
                                </div>
                                <div className="form-group">
                                    <label></label>
                                    <input id="phone" onChange={this.handleChange} value={this.state.phone} name="phone" placeholder="nr telefonu" type="text" className="form-control" />
                                </div>

                                {this.state.where === "delivery" ? <div className="form-group">
                                    <label></label>
                                    <input value={this.state.addres} onChange={this.handleChange} id="addres" name="addres" placeholder="adres" type="text" className="form-control" />
                                </div> : null}

                                <div className="modal-footer">
                                    <span className="badge badge-dark mx-2"> kwota: {cost}  zł</span>

                                    <Link to={"/pizzamaker"} onClick={this.orderClick} data-dismiss="modal" className="btn btn-success">Zamów</Link>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>



            </div>

        );
    }
}

export default FormOrder;





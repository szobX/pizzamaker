import React, { Component } from 'react';

class FormOrder extends Component {
    state = {
        name: "",
        addres: "",
        phone: "",
        where: "pickup",
        error: true
    }

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        console.log(name, type, e.target.value)
        this.setState({
            [name]: e.target.value
        })
    }
    render() {
        return (
            <div id="form" class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <form>
                                <div class="form-group">
                                    <div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input onClick={this.handleChange} name="where" id="radio_0" type="radio" class="custom-control-input" value="pickup" checked={this.state.where === "pickup" ? true : false} />
                                            <label for="radio_0" class="custom-control-label">odbiór osobisty</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input onClick={this.handleChange} name="where" id="radio_1" type="radio" class="custom-control-input" value="delivery"
                                                checked={this.state.where === "delivery" ? true : false}
                                            />
                                            <label for="radio_1" class="custom-control-label">dowóz pod adres</label>
                                        </div>
                                    </div>
                                </div>

                                {/* dane */}

                                <div class="form-group">
                                    <label></label>
                                    <input id="name" onChange={this.handleChange} name="name" placeholder="imię i nazwisko " type="text" class="form-control" value={this.state.name} />
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <input id="phone" onChange={this.handleChange} value={this.state.phone} name="phone" placeholder="nr telefonu" type="text" class="form-control" />
                                </div>

                                {this.state.where === "delivery" ? <div class="form-group">
                                    <label></label>
                                    <input value={this.state.addres} onChange={this.handleChange} id="addres" name="addres" placeholder="adres" type="text" class="form-control" />
                                </div> : null}

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success">Zamów</button>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
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





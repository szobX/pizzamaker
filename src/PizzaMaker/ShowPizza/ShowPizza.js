import React from 'react';

const ShowPizza = (props) => {


    return (
        <div className="col-md-8 order-md-1 h-100 ">
            <h3 className="">Twoja Pizza:</h3>
            <div className="d-flex px-5 ">
                <div className="row card-list flex-wrap ">
                    <div className="cardss  ">
                        <img src={props.PizzaBase} className="img-fluid" alt="base" />
                    </div>

                    {Object.keys(props.composition).map((item, index) => {
                        let tampleteShow = [];
                        for (let j = 0; j < props.composition[item]; j++) {
                            tampleteShow.push(
                                <div key={item + 'i' + j} className="cardss  ">
                                    <img src={props.components[item].img} className="img-fluid" alt="base" />
                                </div>
                            )
                        }
                        return tampleteShow
                    })
                    }




                </div>
            </div>
        </div>
    );
}

export default ShowPizza;
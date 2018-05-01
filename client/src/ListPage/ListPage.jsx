import React, { Component } from "react";
import SelectItems from "./SelectItem";
import ItemSearch from "./ItemSearch";

class ListPage extends Component {

    constructor(){
        super();
        this.state = {
            selectedFoods: []
        };
    };


    removeFoodItem (itemIndex){
        const filteredFoods = this.state.selectedFoods.filter(
            (item, idx) => itemIndex !== idx
        );
        this.setState({ selectedFoods: filteredFoods });
    };

    addFood(food){
        const newFoods = this.state.selectedFoods.concat(food);
        this.setState({ selectedFoods: newFoods });
    };

    render() {
        const { selectedFoods } = this.state;

        return (
            <div className="App">
                <div className="ui text container">
                    <SelectItems
                        foods={selectedFoods}
                        onFoodClick={this.removeFoodItem}
                    />
                    <ItemSearch onFoodClick={this.addFood} />
                </div>
            </div>
        );
    }
}

export default ListPage;
import React, {Component} from "react";
import * as householdApi from '../../../routes/api/household';
import * as userApi from '../../../routes/api/user';

//import Client from "./Client";

const MATCHING_ITEM_LIMIT = 25;

class ListPage extends React.Component {
    constructor(){
        super();
        this.state = {
            item: [],
            showRemoveIcon: false,
            searchValue: ""
        };
    } 
    
    handleSearchChange(e){
        const value = e.target.value;

        this.setState({
            searchValue: value
        });

        if (value === "") {
            this.setState({
                item: [],
                showRemoveIcon: false
            });
        } else {
            this.setState({
                showRemoveIcon: true
            });

            /*Client.search(value, foods => {
                this.setState({
                    item: foods.slice(0, MATCHING_ITEM_LIMIT)
                });
            });*/
        }
    };

    handleSearchCancel(){
        this.setState({
            item: [],
            showRemoveIcon: false,
            searchValue: ""
        });
    };

    componentDidMount(){
        let user = userApi.GetById('11111')[0];
        let house = householdApi.GetById(user.houseId)[0];

        console.log(user);
        console.log(house);
        this.setState({
            item: house.shoppingList
        })
    };
    
    render() {
        const { showRemoveIcon, item } = this.state;
        const removeIconStyle = showRemoveIcon ? {} : { visibility: "hidden" };

        const foodRows = item.map((food, idx) => (
            <tr key={idx} onClick={() => this.props.onFoodClick(food)}>
                <td>No Description</td>
                <td className="right aligned">{food.name}</td>
                <td className="right aligned">{food.brand}</td>

            </tr>
        ));

        return (
            <div id="food-search">
                <table className="ui selectable structured large table">
                    <thead>
                    <tr>
                        <th colSpan="5">
                            <div className="ui fluid search">
                                <div className="ui icon input">
                                    <input
                                        className="prompt"
                                        type="text"
                                        placeholder="Search foods..."
                                        value={this.state.searchValue}
                                        onChange={this.handleSearchChange}
                                    />
                                    <i className="search icon" />
                                </div>
                                <i
                                    className="remove icon"
                                    onClick={this.handleSearchCancel}
                                    style={removeIconStyle}
                                />
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th className="eight wide">Description</th>
                        <th>name</th>
                        <th>brand</th>
                    </tr>
                    </thead>
                    <tbody>
                    {foodRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListPage;
import { Component } from "react";

export class GroceryList extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            groceryList: []
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        // console.log(e)
    }

    addItem(input) {
        if (input === '') {
            alert ('Please enter an item')
        }
        else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''});
        // console.log(listArray)
    }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="conteiner">
                <input placeholder="what do you want to buy"
                onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput}/>
            </div>
            
            <div className="conteiner">
                <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>

            <div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                            <img src="https://cdn-icons-png.flaticon.com/512/3759/3759041.png" alt="cheked" width="30px"/>
                            {item}</li>
                    ))}
                    </ul>
                    <div className="conteiner">
                    <button className="btn delete" onClick={() => this.deleteItem(this.state.userInput)}>Delete</button>
                    </div>
            </div>
            </form>
            </div>
        )
    }
}
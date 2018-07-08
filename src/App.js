import React, { Component } from 'react';
import List from './Components/List/List';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import classes from './App.css';

class App extends Component {

  state = {
    items: [
      { id: 1, currentItem: {name: 'Alex', service: 'Transfers', price: 150}, editMode: false, editItem: {} },
      { id: 2, currentItem: {name: 'Max',  service: 'Design',    price: 250}, editMode: false, editItem: {} },
      { id: 3, currentItem: {name: 'Kate', service: 'SMM',       price: 350}, editMode: false, editItem: {} }
    ],
    itemsLastId: 3,
    newItem: { id: '', currentItem: {name: '', service: '', price: ''}, editMode: false, editItem: ''}
  };

  deleteItemHandler = itemIndex => {
      const items = [...this.state.items];
      items.splice(itemIndex,1);
      this.setState({items: items});
  };

  newInputChangeHandler = (event,type) => {
      const newItem = {...this.state.newItem};
      newItem.currentItem[type] = event.target.value;
      this.setState({newItem: newItem});
  };

  addItemHandler = () => {
      let itemsLastId = this.state.itemsLastId;
      itemsLastId++;

      const newItem = {...this.state.newItem};
      newItem.id = itemsLastId;

      this.setState({
         items: [...this.state.items,newItem],
         itemsLastId: itemsLastId,
         newItem: { id: '', currentItem: {name: '', service: '', price: ''}, editMode: false, editItem: ''} 
      });
  };

  changeClickItemHandler = index => {
      const items = [...this.state.items];
      items[index].editItem = {...items[index].currentItem};
      items[index].editMode = true;
      this.setState({items: items});
  };

  changeEditInputHandler = (event, index, type) => {
      const items = [...this.state.items];
      items[index].editItem[type] = event.target.value;
      this.setState({items: items});
  };

  saveItemHandler = index => {
      const items = [...this.state.items];
      items[index].currentItem = {...items[index].editItem};
      items[index].editMode = false;
      this.setState({items: items});
  };

  render() {   

    return (
        <div className={classes.App}>
            <TextField className={classes.TextField} label="Name" value={this.state.newItem.currentItem.name} onChange={(event)=>this.newInputChangeHandler(event,'name')}/>
            <TextField className={classes.TextField} label="Service" value={this.state.newItem.currentItem.service} onChange={(event)=>this.newInputChangeHandler(event,'service')}/>
            <TextField className={classes.TextField} label="Price" value={this.state.newItem.currentItem.price} onChange={(event)=>this.newInputChangeHandler(event,'price')}/>
            <Button mini variant="fab" color="primary" className={classes.Button} onClick={this.addItemHandler}>
                <AddIcon />
            </Button>
            <List items={this.state.items} delete={this.deleteItemHandler} change={this.changeClickItemHandler} changeEdit={this.changeEditInputHandler} save={this.saveItemHandler} />
        </div>
    );
  };
};

export default App;

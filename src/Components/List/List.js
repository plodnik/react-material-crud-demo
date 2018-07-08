import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import classes from './List.css';

const list = (props) => {

    return(
        <Paper>
        <div className={classes.List}>
        <Table className={classes.Table}>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Service</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {props.items.map((item, index) => {
              let itemBlock = null;
              if (item.editMode){
                  itemBlock = (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>
                            <TextField label="Name" value={item.editItem.name} onChange={(event)=>props.changeEdit(event,index,'name')}/>
                        </TableCell>
                        <TableCell>
                            <TextField label="Service" value={item.editItem.service} onChange={(event)=>props.changeEdit(event,index,'service')}/>
                        </TableCell>
                        <TableCell>
                            <TextField label="Price" value={item.editItem.price} onChange={(event)=>props.changeEdit(event,index,'price')}/>
                        </TableCell>
                        <TableCell>
                            <Button mini variant="fab" color="primary" className={classes.Button} onClick={()=>props.save(index)}>
                                <SaveIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                  )
              } else {
                 itemBlock = (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.currentItem.name}</TableCell>
                        <TableCell>{item.currentItem.service}</TableCell>
                        <TableCell>{item.currentItem.price}</TableCell>
                        <TableCell>
                            <Button mini variant="fab" color="primary" className={classes.Button} onClick={()=>props.change(index)}>
                                <EditIcon />
                            </Button>
                            <Button mini variant="fab" color="primary" className={classes.Button} onClick={()=>props.delete(index)}>
                                <DeleteIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                 ) 
              }
              return itemBlock
            })}          
            </TableBody>
        </Table>
        </div>
        </Paper>    
    );
};

export default list;
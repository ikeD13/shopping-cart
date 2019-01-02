import React from 'react';

const AddItem = (props)=>{
    return (
        <div className="container">
        <form onSubmit={props.addItem}>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Quantity</label>
        <input type="number" class="form-control" id="quantity" placeholder="" onChange={props.update}/>
        </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Select Inventory</label>
                <select onChange={props.updateCart} className="form-control" id="exampleFormControlSelect1">
                {props.products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)}
                </select>
            </div>
            <button type="submit" class="btn btn-primary" type="submit" value="">Submit</button>
            </form>
            </div>
    );
}
export default AddItem;
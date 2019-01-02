import React from 'react';

const AddItem = (props)=>{
    return (
        <div className="container">
        <form onSubmit={props.addItem}>
        <div class="form-group">
        <label for="exampleInputEmail1">Quantity</label>
        <input type="number" class="form-control" id="quantity" placeholder=""/>
        </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select onChange={props.selectItem} class="form-control" id="exampleFormControlSelect1">
                {props.products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)}
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
    );
}
export default AddItem;
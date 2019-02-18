import React, { Component } from "react";
import Touchable from "rc-touchable";
import "./style.css";
import { MDBContainer, MDBTable, MDBRow,
        MDBCol, MDBTableHead, MDBTableBody,
        MDBTooltip} from "mdbreact";

// This is the container that carries the entire cart box
// export function CartList({ children }) {
  export function CartBody(props) {
  return (
    <React.Fragment>
    {props.currentId ?
    <React.Fragment>
    <MDBContainer>
      <MDBRow>
        {/* <MDBCol className= "padding-x"> */}
        <MDBCol>
            <MDBTable>
                <MDBTableHead>
                  <tr>
                    <th>Item</th>
                    <th>Desciption</th>
                    <th>UOM</th>
                    <th>Quantity</th>
                    <th></th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>Bottle top filter funnel</td>
                    <td>125ul</td>
                    <td>bag</td>
                    <td><input></input></td>
                    <td><DeleteCartItemBtn></DeleteCartItemBtn></td>
                  </tr>
                  <tr>
                    <td>Tractor</td>
                    <td>2tons</td>
                    <td>none</td>
                    <td><input type="number"  min = "1" max = "25"></input></td>
                    <td><DeleteCartItemBtn></DeleteCartItemBtn></td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </React.Fragment>
    :<div className = "hide-component"></div>}
    </React.Fragment>
  ); //return
}

// This is one item in the cart
class CartItem extends Component {
componentDidUpdate() {
  this.validateQuantity();
}
validateQuantity = (event) => {
    //Validate Whether the Quantity is in stock
    if(event){
      let quantityId = event.target.id;
      this.props.updateItem(quantityId, event.target.value);
    }
    let quantityInputElements = document.querySelectorAll('[data-quantity-id]');
    let isQuantityAvailable = true;
    let shouldCartBeSubmitted = true;
      for(let i = 0; i<  quantityInputElements.length; i++){
        let maxValue = parseInt(quantityInputElements[i].getAttribute('max'));
        let minValue = parseInt(quantityInputElements[i].getAttribute('min'));
        let quantityInputValue = parseInt(quantityInputElements[i].value);
        isQuantityAvailable = minValue <= quantityInputValue && maxValue >= quantityInputValue && maxValue !== 0;

        // If quantity not available stop loop
        if (!isQuantityAvailable){
          shouldCartBeSubmitted = false;
          quantityInputElements[i].style.color = 'red';
        }
        else{
          if(event){
          quantityInputElements[i].style.color = '';
          }
        }
      } //for

      if(shouldCartBeSubmitted)
      {
        document.getElementById("checkout-btn").disabled = false;
      }
      else
      {
        document.getElementById("checkout-btn").disabled = true;
      }
  }
    render(){
  return (
    <tr id = {'row-' + this.props.cartItem._id}
        key= {this.props.cartItem._id}>
      {/* <td  className="align-middle w-75"
          id={'name-'+ this.props.cartItem._id}>
          {this.props.cartItem.product}
      </td> */}
      <td  className="align-middle"
          id={'name-'+ this.props.cartItem._id}>
          {this.props.cartItem.product}
      </td>
      {/* <td
          className="align-middle w-50 ">
          {this.props.cartItem.description}
      </td> */}
      <td
          className="align-middle">
          {this.props.cartItem.description}
      </td>
      <td
          className="align-middle text-center w-25">
          {this.props.cartItem.uom}
      </td>
      <td className="align-middle  text-center">
        {/* <input className = "show-component text-center w-75" */}
        <input className = "show-component text-center"
        // <input className = "show-component align-middle text-center w-25"
              id={'quantity-'+this.props.cartItem._id} type="number"
              data-quantity-id = {this.props.cartItem._id}
              min = "1" max = {this.props.stockQuantity}
              defaultValue = {this.props.cartItemQuantity}
              onChange = {this.validateQuantity}
              >
        </input>
      </td>
      <td className="align-middle">
        <DeleteCartItemBtn  cartItem = {this.props.cartItem}
                            delCartItems = {this.props.delCartItems}>
        </DeleteCartItemBtn>
      </td>
    </tr>
  );
}
}
export function DeleteCartItemBtn(props){
  return(
    <MDBTooltip
                placement="top"
                tag="button"
                color="red"
                size="sm"
                id = {props.cartItem._id}
                className=" xbtn "
                data-cart-item-id= {props.cartItem._id}
                onClick= {props.delCartItems}
                tooltipContent=" Remove Item">
      <Touchable  onPress={props.submitOrder}>
          <span
                id = {props.cartItem._id}
                className= "xbtn"
                data-cart-item-id= {props.cartItem._id}
                onClick= {props.delCartItems}>
                X
          </span>
      </Touchable>
    </MDBTooltip>
  );
}

// // This is the checkout button
// export function CheckOutBtn(props) {
//   return (
//     <Touchable onPress={props.submitOrder}>
//       <MDBBtn type="submit"
//               id = "checkout-btn"
//               className="btn btn-success fas fa-shopping-cart"
//             >
//       <span>  Submit</span>
//       </MDBBtn>
//     </Touchable>
//   );
// }

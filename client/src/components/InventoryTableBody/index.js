import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard,
         MDBTable, MDBTableBody, MDBTableHead, MDBTooltip
        } from "mdbreact";
import Touchable from 'rc-touchable';
import "./style.css";

export function InventoryTableBody(props) {
  return (
    <MDBContainer className="mt-3">
      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBTable responsive striped>
              <MDBTableHead className="w-100" color="blue-gradient">
                <tr>
                  <th>Item</th>
                  <th className="text-center">Description</th>
                  <MDBTooltip   placement="bottom"
                                tag="th"
                                className="text-center"
                                tooltipContent="Unit of Measure">
                                UOM
                </MDBTooltip>
                <th className="text-center">Category</th>
                <MDBTooltip     placement="bottom"
                                tag="th"
                                className="text-center"
                                tooltipContent="Stock Quantity">
                                Quantity
                  </MDBTooltip>
                {props.currentId ? <th></th> :
                    <th className="hide-component"></th>}
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {props.products.map(product => {
                  return (
                    <InventoryTableItem
                                        key={product._id}
                                        currentId={props.currentId}
                                        product={product}
                                        listener={props.addCartItems}
                                        disableAddBtn={props.disableAddBtn}
                                        />
                  );
                })}
              </MDBTableBody>
            </MDBTable>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export function InventoryTableItem(props){
  return(
    <tr id="invtable">
      <td className="align-middle" id={'name-'+props.product._id}>{props.product.productName}</td>
      <td className="align-middle text-center">{props.product.description}</td>
      <td className="align-middle text-center">{props.product.uom}</td>
      <td className="align-middle text-center">{props.product.category}</td>
      <td className="align-middle text-center" id={'prod-stock-quantity-'+props.product._id}>{props.product.stockQuantity}</td>
      {props.currentId?<td><AddInventoryBtn product = {props.product} listener = {props.listener} disabled = {props.disableAddBtn(props.product.stockQuantity)}></AddInventoryBtn></td>:<td className = "hide-component"></td>}
    </tr>
  );
}

export function AddInventoryBtn(props){
  return(
    // <Touchable onPress={props.listener}>
    <Touchable>
    <MDBBtn
            data-toggle="modal"
            data-target="#modal-cart"
            id={props.product._id}
            className="addButton black-text"
            onClick={props.listener}
            data-product-id = {props.product._id}
            key= {props.product._id+"btn"}
            disabled = {props.disabled}
            type="button"
            color="primary"
            size="sm"
            >
      Add
    </MDBBtn>
    </Touchable>
  );
}

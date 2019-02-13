// import React from "react";
// import { MDBBtn, MDBModal, MDBModalHeader, MDBIcon, MDBModalBody,
//         MDBModalFooter
//         } from "mdbreact";
// import Touchable from "rc-touchable";
// import {CartBody} from "../CartBody";
// import "../../style.css";
// import "./style.css";

// export function CartModal (props) {

//     return (
//       <div className="modal fade"
//       id="modal-cart"
//       tabIndex="-1"
//       role="dialog"
//       aria-labelledby = "exampleModalLabel"
//       aria-hidden = "true">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           {/* <!--Header--> */}
//           <div className="modal-header">
//             <h4 className="modal-title" id="myModalLabel">Shopping Cart</h4>
//             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">×</span>
//             </button>
//           </div>
//           {/* <!--Body--> */}
//           <div className="modal-body">
//             <CartBody
//               cartItems={props.cartItems}
//               currentId={props.currentId}
//               delCartItems={props.delCartItems}
//             />
//           </div>
//           {/* <!--Footer--> */}
//           <div className="modal-footer">
//             <MDBBtn
//               type="button"
//               color="primary"
//               className="btn btn-radius"
//               data-dismiss="modal">Close
//             </MDBBtn>
//             <MDBBtn
//               // className="btn btn-primary "
//               // className = "btn btn-#00bfa5 teal accent-4 btn-lg Ripple-parent btn-rounded white-text"
//               type = "button"
//               color="secondary"
//               className = "btn btn-#039be5 light-blue darken-1 btn-radius"
//               id ="checkout-btn"
//               data-dismiss="modal"
//               aria-label="Close"
//               disabled = {props.cartItems.length === 0 ? (true):(false)}
//               onClick={props.submitOrder}>Submit</MDBBtn>
//           </div>
//         </div>
//       </div>
//       </div>
//     )}


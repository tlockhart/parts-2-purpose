import React from "react";
import Touchable from "rc-touchable";
import { Input} from "../LogIn";
import { MDBTooltip, MDBBtn, MDBModal, MDBModalBody,
         MDBModalHeader, MDBModalFooter } from 'mdbreact';
import "../../style.css";
import "./style.css";


export function ModalComponent(props) {

    const tooltip = `${props.state.registerUser ? ("Click to Login"):("Click here to register new user.")}`

    return (
      <MDBModal isOpen={props.state.show}
                toggle={props.handleClose}
              className= { (props.state.registerUser) ? ("modal-Container modal-scroll-y"):("")}>
      <MDBModalHeader className="text-center">
          {props.state.registerUser ? ("Please Register"):("Please Login")}
          {props.state.loginError && !props.state.registerUser ? (<p className="text-danger">Incorrect Username or Password!</p>):("")}
          {props.state.registerError && props.state.registerUser ? (<p className="text-danger">Username already in used. Please try again.</p>):("")}
          {props.state.invalidEmail && props.state.registerUser ? (<p className="text-danger">Invalid Email. Please try again.</p>):("")}
      </MDBModalHeader>
        {props.state.registerUser ? (
        <MDBModalBody>
        <Input
                value={props.state.userName}
                onChange={props.handleInputChange}
                name="userName"
                placeholder="Enter User Name"
                label="User Name"
                smallname="form-text text-muted"
                smalltext="User Name"
                required="required"/>
        <Input
                value={props.state.firstName}
                onChange={props.handleInputChange}
                name="firstName"
                placeholder="Enter Your First Name"
                label="First Name"
                smallname="form-text text-muted"
                smalltext="First Name"
                required="required"/>
        <Input
                value={props.state.lastName}
                onChange={props.handleInputChange}
                name="lastName"
                placeholder="Enter Your Last Name"
                label="Last Name"
                smallname="form-text text-muted"
                smalltext="Last Name"
                required="required"/>
        {/* <Input
                value={props.state.school}
                onChange={props.handleInputChange}
                name="school"
                placeholder="Enter Your School"
                label="School"
                smallname="form-text text-muted"
                smalltext="School"
                required="required"/>
        <Input
                value={props.state.district}
                onChange={props.handleInputChange}
                name="district"
                placeholder="Enter Your District"
                label="District"
                smallname="form-text text-muted"
                smalltext="District"
                required="required"/>
        <Dropdown
                    value={props.state.selectedCourse}
                    onChange={props.handleInputChange}
                    name="selectedCourse"
                    smallname="form-text text-muted"
                    smalltext="select a Course"
                    required="required">
              {props.state.courses.map(course => (
                  <DropdownList
                                key={course}
                                value={course}>
                  </DropdownList>
              ))}
        </Dropdown> */}
        <Input
                value={props.state.email}
                onChange={props.handleInputChange}
                name="email"
                type="email"
                placeholder="Enter Email"
                label="Email"
                pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                smallname="form-text text-muted"
                smalltext="We'll never share your email with anyone else."
                required="required"
                className={props.state.invalidEmail ? ("form-control error"):("form-control")}
        />
        <Input
                value={props.state.password}
                onChange={props.handleInputChange}
                name="password"
                type="password"
                placeholder="Enter Password"
                label="Password"
                smallname="form-text text-muted"
                smalltext="Password"
                required="required"
        />
        <MDBModalFooter>
          <MDBTooltip
                      placement="top"
                      tag="div"
                      tooltipContent={tooltip}>
            <Touchable onPress={props.handleUserLogIn}>
              <span
                    className="mr-3"
                    flat = "flat"
              >
                Login?
              </span>
            </Touchable>
          </MDBTooltip>
          <Touchable onPress={props.handleRegisterSubmit}>
            <MDBBtn
                    disabled={!(props.state.email
                                && props.state.password
                                && props.state.userName
                                && props.state.firstName
                                && props.state.lastName)}
                    color="primary"
                    id="register-btn"
            >
            Register
            </MDBBtn>
          </Touchable>
          <Touchable onPress={props.handleClose}>
              <MDBBtn
                      color="primary"
                      id="close-btn"
              >
              Close
              </MDBBtn>
          </Touchable>
        </MDBModalFooter>
        </MDBModalBody>
        ) : (
        <MDBModalBody>
        <Input
                value={props.state.userName}
                onChange={props.handleInputChange}
                name="userName"
                placeholder="Enter User Name"
                label="User Name"
                // pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                smallname="form-text text-muted"
                smalltext="We'll never share your information with anyone else."
                required="required"
        />
        <Input
                value={props.state.password}
                onChange={props.handleInputChange}
                name="password"
                type="password"
                placeholder="Enter Password"
                label="Password"
                smallname="form-text text-muted"
                smalltext="Password"
                required="required"
        />
        <MDBModalFooter>
          <MDBTooltip
                        placement="top"
                        tag="div"
                        tooltipContent={tooltip}>
            <Touchable onPress={props.handleRegister}>
              <span
                    className="mr-3"
                    flat = "flat"
                >
                  Register?
                </span>
            </Touchable>
          </MDBTooltip>
          <Touchable onPress={props.handleSubmit}>
              <MDBBtn
                      disabled={!(props.state.userName && props.state.password)}
                      color="primary"
                      id="login-btn"
              >
              Login
              </MDBBtn>
          </Touchable>
          <Touchable onPress={props.handleClose}>
              <MDBBtn
                      color="primary"
                      id="close-btn"
              >
              Close
              </MDBBtn>
          </Touchable>
        </MDBModalFooter>
        </MDBModalBody>
        )}
      </MDBModal>
    )};

  export default ModalComponent;

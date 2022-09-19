import React, {useContext, useState} from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Validate() {
    var [ccatNo,setCcatNo] = useState("");
    var handleblur=function(e){
      setCcatNo(e.target.value);
    }
    var [compState, setCompState] = useState();
    return (

    <Container>
      <Form>
        <Form.Group>
            <Form.Label>CCAT Number</Form.Label>
            <Form.Control type="text" placeholder="CCAT Number" />
        </Form.Group>
        <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
      </Form>
      <button>Next</button>
    </Container>

    );       
}
export default Validate;
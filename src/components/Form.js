import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Navigation = ({
  render,
  handlerender,
  design,
  quantity,
  factory,
  fileName
}) => (
  <>
    <Form.Group controlId="exampleForm.ControlTextarea2">
      <Button
        variant={render ? "primary" : "secondary"}
        onClick={handlerender}
        disabled={!render}
      >
        Back
      </Button>
      <Button
        variant={
          render || (!!design && !!quantity && !!factory && !!fileName)
            ? "primary"
            : "secondary"
        }
        onClick={
          !render && !!design && !!quantity && !!factory && !!fileName
            ? handlerender
            : null
        }
      >
        {render ? "Assign to Factory" : "Next"}
      </Button>
    </Form.Group>
  </>
);

const Form2 = ({ design, quantity, factory, fileName }) => (
  <>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Factory</Form.Label>
      <Form.Control as="label" size="lg">
        {factory}
      </Form.Control>
      <br />
      <Form.Label>Assign for design</Form.Label>
      <Form.Control as="label">{design}</Form.Control>
      <br />
      <Form.Label>Assign quantity</Form.Label>
      <Form.Control as="label">{quantity}</Form.Control>
      <br />
      <Form.Label>File Selected</Form.Label>
      <Form.Control as="label">{fileName}</Form.Control>
    </Form.Group>
  </>
);

const Form1 = ({
  fileName,
  design,
  quantity,
  factory,
  change,
  setDesign,
  setFactory,
  setQuantity
}) => {
  return (
    <>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Factory</Form.Label>
        <Form.Control
          as="select"
          size="lg"
          onChange={(event) => setFactory(event.target.value)}
        >
          <option disabled={!!factory} selected>
            {!!factory ? factory : "Amaya Creations"}
          </option>
          <option> name 1</option>
          <option> name 2</option>
          <option> name 3</option>
          <option> name 4</option>
          <option> name 5</option>
        </Form.Control>
        {!!factory ? (
          <>
            <br />
            <Form.Label>Assign for design</Form.Label>
            <Form.Control
              as="select"
              placeholder="Search by Name or Design ID"
              onChange={(event) => setDesign(event.target.value)}
            >
              <option disabled={!!design} selected>
                {!!design ? design : "Search by Name or Design ID"}
              </option>
              <option>Design name 1</option>
              <option>Design name 2</option>
              <option>Design name 3</option>
              <option>Design name 4</option>
              <option>Design name 5</option>
              <option>Design name 6</option>
            </Form.Control>
            {!!design ? (
              <>
                <br />
                <Form.Label>Assign quantity</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter quantity"
                  defaultValue={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                />
                <br />
                <Form.File
                  id="exampleFormControlFile1"
                  label={
                    fileName ? "Current file: " + fileName : "Attach Challan"
                  }
                  accept="image/*"
                  onChange={(event) => change(event)}
                />
              </>
            ) : null}
          </>
        ) : null}
      </Form.Group>
    </>
  );
};
const TemplateForm = () => {
  const [render, setRender] = useState(false);
  const [design, setDesign] = useState("");
  const [quantity, setQuantity] = useState("");
  const [factory, setFactory] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handlerender = () => {
    setRender((prev) => !prev);
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0].name);
    console.log(event.target.files[0].name);
  };
  return (
    <>
      <Form>
        {!render ? (
          <Form1
            fileName={selectedFile}
            design={design}
            quantity={quantity}
            factory={factory}
            change={changeHandler}
            setFactory={setFactory}
            setQuantity={setQuantity}
            setDesign={setDesign}
          />
        ) : (
          <Form2
            fileName={selectedFile}
            design={design}
            quantity={quantity}
            factory={factory}
          />
        )}
        <Navigation
          handlerender={handlerender}
          render={render}
          design={design}
          quantity={quantity}
          factory={factory}
          fileName={selectedFile}
        />
      </Form>
    </>
  );
};

export default TemplateForm;

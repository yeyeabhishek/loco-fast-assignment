import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import TemplateForm from "./Form";

const TemplateModal = ({ item, show, close }) => {
  const styles = { width: "7rem", height: "10rem", margin: "2px" };
  const renderSubItem = () => {
    if (item) {
      return (
        <>
          <Row className="text-center text-capitalize col-12">
            <h5>Forms</h5>
          </Row>
          <Row className="text-center m-auto p-auto">
            {item.length !== 0 ? (
              <>
                <Col xs="4" lg="4" sm="6">
                  <img
                    alt="avtar"
                    src={!item.image ? "#" : item.image}
                    style={{ width: "12rem", height: "23rem" }}
                  />
                </Col>
                <Col xs="4" lg="4" sm="6">
                  <TemplateForm />
                </Col>
              </>
            ) : (
              <h6 className="text-center text-capitalize col-12">
                No Data Available
              </h6>
            )}
          </Row>
        </>
      );
    } else {
      return <h5>No Data Availabe</h5>;
    }
  };
  return (
    <>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title className="text-capitalize">{` ${item.type}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderSubItem()}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default TemplateModal;

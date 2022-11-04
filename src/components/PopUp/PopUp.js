import { Button, Modal } from "antd";
import React, { useState } from "react";
import PropTypes from "prop-types";

export const PopUp = ({ title, centered, danger }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const warning = () => {
    Modal.warning({
      title: "This is a warning message",
      content: "some messages...some messages...",
    });
  };
  if (danger == true) {
    return (
      <>
        <Button type="primary" onClick={warning}>
          Open Modal
        </Button>
      </>
    );
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        centered={centered}
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

PopUp.PropTypes = {
  title: PropTypes.string,
  centered: PropTypes.bool,
  danger: PropTypes.bool,
};

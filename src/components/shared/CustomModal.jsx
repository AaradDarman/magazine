import { Icon } from "@blueprintjs/core";
import React, { useState } from "react";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import styled, { useTheme } from "styled-components";
import { appContext } from "../../context/app-context";
import Login from "../Login";
import SignUp from "../SignUp";

const Form = styled.form`
  font-size: 0.8rem;
  position: relative;
  padding: 40px 25px 25px 25px;
  .bp3-form-group {
    margin-bottom: 1rem;
  }
  .bp3-input {
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
  }
  .bp3-form-group .bp3-form-helper-text {
    color: ${({ theme }) => theme.accent};
  }
  .bp3-input:-webkit-autofill {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.primary} inset !important;
  }
  .bp3-input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.text} !important;
  }
  .bp3-control .bp3-control-indicator {
    margin: 0;
    margin-left: 0.5rem;
  }
  .bp3-label span {
    color: #ff3333;
    font-size: 1.5rem;
  }
  .bp3-control input:checked ~ .bp3-control-indicator {
    background-color: ${({ theme }) => theme.accent};
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    box-shadow: inset 0 0 0 1px rgb(16 22 26 / 40%),
      inset 0 -1px 0 rgb(16 22 26 / 20%);
    color: #ffffff;
  }
  .bp3-control input:focus ~ .bp3-control-indicator {
    outline: none;
    outline-offset: 0;
  }
  h5 {
    color: #5c7080;
    font-size: 0.8rem;
  }
  h5 .changePageBtn {
    color: ${({ theme }) => theme.text};
    margin-right: 0.3rem;
    transition: all 0.3s ease-in-out;
  }
  h5 .changePageBtn:hover {
    color: ${({ theme }) => theme.accent};
  }
  .close-icon {
    position: absolute;
    top: 35px;
    left: 21px;
    cursor: pointer;
  }
`;

const CustomModal = () => {
  const CModal = styled(Modal)`
    .modal-content {
      background-color: ${({ theme }) => theme.primary};
      max-height: 90vh;
      overflow-y: auto;
    }
    @media (min-width: 576px) {
      .modal-dialog {
        max-width: 354px;
        margin: 1.75rem auto;
      }
    }
  `;

  const [currentPage, setCurrentPage] = useState("login");
  const mTheme = useTheme();
  const { modalState, setModalState } = useContext(appContext);

  const handleClose = () => {
    // setShow(false);
    setModalState(false);
  };
  const handleShow = (elem) => {
    // setShow(true);
    setModalState(true);
    if (elem.target.innerText === "ورود") {
      setCurrentPage("login");
    } else {
      setCurrentPage("signup");
    }
  };

  const changePage = () => {
    if (currentPage === "login") {
      setCurrentPage("signup");
    } else {
      setCurrentPage("login");
    }
  };

  return (
    <>
      <Button className="mr-2" variant="primary" onClick={handleShow}>
        ورود
      </Button>
      <Button variant="secondary" onClick={handleShow}>
        ثبت نام
      </Button>
      <CModal centered show={modalState} onHide={handleClose}>
        <Form noValidate={true}>
          {currentPage === "login" ? <Login /> : <SignUp />}
          <h5 class="mt-4 mb-2">
            {currentPage === "login"
              ? "کاربر جدید هستی؟"
              : "قبلا در ویجیاتو ثبت نام کردی؟"}
            <a className="changePageBtn" onClick={changePage}>
              {currentPage === "login" ? "ثبت نام کن" : "وارد شو"}
            </a>
          </h5>
          <Icon
            className="ml-auto close-icon"
            color={mTheme.text}
            iconSize={22}
            icon="cross"
            onClick={handleClose}
          />
        </Form>
      </CModal>
    </>
  );
};

export default CustomModal;

// import { HeaderLogo, HeaderVideo } from "../components.styled/Header.styled";

import React, { useState } from "react";
import styled from "styled-components";
// import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import InputField from "../../ui/InputField/InputField";

const Form = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };
};
export default Form;

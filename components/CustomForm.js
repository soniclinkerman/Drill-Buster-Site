// import { HeaderLogo, HeaderVideo } from "../components.styled/Header.styled";

import React, { useState } from "react";
import styled from "styled-components";
// import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import InputField from "../../ui/InputField/InputField";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
    text-align: center;
    padding: 1em;
  `;

  const FormTitle = styled.h3`
    margin-bottom: 1em;
  `;

  const FormInput = styled.input`
    width: 70%;
    padding: 0.75em 2em;
    padding-left: 1em;
  `;

  const FormContainer = styled.div`
    /* width: 100%; */
    width: 50%;
    margin: auto;
  `;

  return (
    <form className="mc__form">
      <FormStyle>
        <FormTitle>Subscribe to know when the next biome drops</FormTitle>
        <FormContainer>
          <FormInput
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />
        </FormContainer>
      </FormStyle>
    </form>
  );
};
export default CustomForm;

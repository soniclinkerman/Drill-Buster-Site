import { useRef, useState } from "react";
import styled from "styled-components";
export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // console.log(inputRef.current.value);
    // this is where your mailchimp request is made

    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
  };

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

    margin-bottom: 1.5em;
    padding: 0.5em 2.5em;
  `;

  const FormContainer = styled.div`
    /* width: 100%; */
    width: 50%;
    margin: auto;
  `;

  const FormAbout = styled.div`
    /* width: 100%; */
    width: 90%;
    line-height: 2em;
    letter-spacing: 2px;
    margin: 0 auto 1.5em auto;
  `;

  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 2rem;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
  `;
  const SubscribeButton = styled(Button)`
    display: flex;
    margin: auto;
    font-size: 1.75rem;
    color: #ffffff;
    background-color: #3abaff;
    border: 2px solid #ffffff;
    border-radius: 0;
    padding: 0.5em 2.5em;
    margin-bottom: 2em;
    //DELETE ON LAUNCH
    /* pointer-events: none; */
    //DELETE ON LAUNCH

    @media (min-width: 1000px) {
      padding: 0.75em 6em;
      font-size: 2.5rem;
      font-weight: bold;
    }
  `;

  const FormLink = styled.a`
    border: 2px solid white;
    font-size: 1.75rem;
    padding: 0.5em 2.5em;
    background-color: #3abaff;
  `;

  return (
    // <form onSubmit={subscribeUser}>
    <FormStyle>
      <FormTitle>
        Wanna know when the next Biome Drops? Subscribe to our newsletter!
        {/* <FormLink href="http://eepurl.com/h60L1n" target="_blank">
          {" Subscribe to our newsletter by clicking here!"}
        </FormLink> */}
      </FormTitle>

      <FormContainer>
        <FormLink href="http://eepurl.com/h60L1n" target="_blank">
          Subscribe
        </FormLink>
        {/* <FormAbout>
          {`We hate constant emails which is why we only plan on contacting you no more than 1-2 times every other week.`}
        </FormAbout> */}
        {/* <div className="EmailField">
            <FormInput
              className="EmailInput"
              type="email"
              id="email-input"
              name="email"
              placeholder="Email"
              ref={inputRef}
              required
              autoCapitalize="off"
              autoCorrect="off"
            />

            <label htmlFor="email-input" className="form__label">
              Your Best Email
            </label>
          </div> */}
        {/* <SubscribeButton
          // type="submit"
          value=""
          // name="subscribe"
          href="http://eepurl.com/h60L1n"
          target="_blank"
        >
          Click Here to Subscribe
        </SubscribeButton> */}
      </FormContainer>
    </FormStyle>
    // </form>
  );
}

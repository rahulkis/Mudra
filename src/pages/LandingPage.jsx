import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Form } from "./landing page/Form";

export const LandingPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="branding_title mb-3 mt-5 text-center">
              <h1>Mudra Liquidity Locker</h1>
              <p>
                Lock and Manage your liquidity htmlFor BSC tokens securely.
                Featured in <Link to="#">Yahoo! Finance</Link> and trusted by
                1000+ projects! <Link to="#"> Learn more.</Link>
              </p>
              <Button className="btn primary_btn" buttonText="Connect wallet" />
            </div>
          </div>
          <Form />
          <div className="col-md-12 my-4 text-center">
            <Button
              type="button"
              className="btn primary_btn mx-2"
              buttonText="Approved LP Tokens"
            />
            <Button
              type="button"
              className="btn primary_btn"
              buttonText=" Lock LP Tokens"
            />
          </div>
        </div>
      </div>
    </>
  );
};

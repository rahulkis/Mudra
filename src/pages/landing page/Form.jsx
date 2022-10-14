import React from "react";

export const Form = () => {
  return (
    <>
      {" "}
      <div className="col-md-10 offset-md-1">
        <div className="d-flex align-items-start nav-pills-custom">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Lock LP Tokens
            </button>
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Manage LP Locken Locks
            </button>
            <button
              className="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Browser All Locks
            </button>
          </div>
          <div
            className="tab-content w-100 tab_wrapper"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade shadow rounded active show"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="row align-items-baseline">
                <div className="col-md-9">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form_input"
                      id="exampleFormControlInput1"
                      placeholder="Enter PancakeSwap LP token address"
                    />
                  </div>
                </div>
                <div className="col-md-3">Pair:</div>
              </div>
              <div className="row align-items-baseline">
                <div className="col-md-9">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control form_input"
                      placeholder="Enter LP token amount to lock"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn input_btn"
                      type="button"
                      id="button-addon2"
                    >
                      Max
                    </button>
                  </div>
                </div>
                <div className="col-md-3">Available:0</div>
              </div>
              <div className="row align-items-baseline">
                <div className="col-md-9">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control form_input"
                      placeholder="Enter LP token amount to lock"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn input_btn_secondry"
                      type="button"
                      id="button-addon2"
                    >
                      Tomorrow
                    </button>
                    <button
                      className="btn input_btn"
                      type="button"
                      id="button-addon2"
                    >
                      +1 Year
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9">
                  <label className="mb-2 label_design"> Select fee type:</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Pay in LP (.5% of locked LP Tokens)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Pay in BNB (.1 BNB flat)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade shadow rounded "
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade shadow rounded "
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

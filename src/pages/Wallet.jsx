import React, { useState } from "react";
import CardImage from "../assets/images/card_img.png";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const imageGrid = [
  { id: 1, name: "#1", value: "7 days staked" },
  { id: 2, name: "#2", value: "7 days staked" },
  { id: 3, name: "#3", value: "7 days staked" },
  { id: 4, name: "#4", value: "7 days staked" },
];

export const Wallet = () => {
  const [checkedState, setCheckedState] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleOnChange = (e) => {
    const { checked, name } = e.target;
    let newArray = [...checkedState];
    if (checked) {
      newArray.push(name);
    } else {
      const index = newArray.indexOf(name);
      if (index > -1) {
        newArray.splice(index, 1);
      }
    }
    setCheckedState(newArray);
  };

  const handleSelectAllRight = () => {
    const newArray = imageGrid.map((img, i) => {
      return img.name;
    });

    setCheckedState(newArray);
  };

  const handleSelectLeft = (e) => {
    setChecked(true);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="heading mt-4">My Wallet</h4>
          </div>
          <div className="col-md-6">
            <div className="wallet_card">
              <div className="info_icon">
                <Link href="#">
                  {/* <i className="fa fa-info-circle" aria-hidden="true"></i> */}
                  <FontAwesomeIcon icon={faCircleInfo} />
                </Link>
              </div>
              <div className="wallet_top">
                <div className="card_img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/35/Bitcoin_euro.png"
                    alt=""
                  />
                </div>
                <div className="card_price">
                  <h2>300</h2>
                  <p>$Gold</p>
                </div>
              </div>
              <div className="wallet_bottom">
                <Button buttonText="Add to Metamask" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wallet_card">
              <div className="info_icon">
                <Link href="#">
                  {/* <i className="fa fa-info-circle" aria-hidden="true"></i> */}
                  <FontAwesomeIcon icon={faCircleInfo} />
                </Link>
              </div>
              <div className="wallet_top">
                <div className="card_img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/35/Bitcoin_euro.png"
                    alt=""
                  />
                </div>
                <div className="card_price">
                  <h2>300</h2>
                  <p>$Gold</p>
                </div>
              </div>
              <div className="wallet_bottom">
                <Button buttonText="Clam $GOLD" />
                <p>Daily Earn Rate: 40</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4 className="heading">My Staking</h4>
          </div>
          <div className="col-md-6">
            <div className="section_heading">
              <div className="item_heading">
                <p> Unstaked Eternal Vikings</p>
                <p>1</p>
              </div>
              <Button buttonText="Select All" handleClick={handleSelectLeft} />
            </div>
            <div className="card_wrapper">
              <div className="row">
                <div className="col-md-4">
                  <div className="select_box">
                    <input
                      className="card_checkbox"
                      type="checkbox"
                      id="1"
                      value="1"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />

                    <div className="card custom_card">
                      <img src={CardImage} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">#6</h5>
                        <p className="card-text">7 days staked</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="section_heading">
              <div className="item_heading">
                <p> Unstaked Eternal Vikings</p>
                <p>1</p>
              </div>
              <Button
                buttonText="Select All"
                handleClick={handleSelectAllRight}
              />
            </div>
            <div className="card_wrapper">
              <div className="row">
                {imageGrid.map((d, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="select_box">
                      <input
                        className="card_checkbox"
                        type="checkbox"
                        name={d.name}
                        checked={checkedState.includes(d.name)}
                        onChange={handleOnChange}
                      />

                      <div className="card custom_card">
                        <img
                          src={CardImage}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{d.name}</h5>
                          <p className="card-text">{d.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useContext } from "react";
import "./Trips.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthContext";

const Trips = () => {
  const { name, url } = useContext(AuthContext);

  let userLogin = localStorage.getItem("userLogin");
  if (userLogin !== null) {
    var { userinLocal, urlLocal, nameLocal } = JSON.parse(userLogin);
  }

  let bookingData = localStorage.getItem("bookingData");
  if (bookingData !== null) {
    var {
      FirstName,
      LastName,
      arrivalTime,
      orderId,
      seatFare,
      startTime,
      travelerAgentName,
    } = JSON.parse(bookingData);
  }
  return (
    <>
      <div className="trips__bg">
        <div className="trips_header">
          <Link to="/">
            <img
              src="https://i.postimg.cc/QdFbpfcz/tripfox-logo.jpg"
              alt="tripfox"
              width="70px"
              alt="tripfox"
            />
          </Link>
          <Link>flights</Link>
          <Link>hotels</Link>
          <Link>buses</Link>
          <Link>trains</Link>
          <Link>trip planner</Link>
          <Link>more</Link>
          <Link>
            <img src={url || urlLocal} width="50px" className="trips__round" />
          </Link>
        </div>
        <div className="trips__space"></div>
        <div className="trips__profile">
          <div>
            <img src={url || urlLocal} width="150px" alt="" />
          </div>
          <div>
            <p>{name || nameLocal}</p>
          </div>
        </div>
      </div>
      <h3 className="trips__center">My trips</h3>

      {bookingData ? (
        <div className="trips__recordCont">
          <div>
            <h4>Delhi to Manali</h4>|
            <p>
              <b>Travl Agent :</b> {travelerAgentName}
            </p>
          </div>
          <div>
            <p>
              <b>Name:</b> {FirstName} {LastName}
            </p>
          </div>
          <div>
            <p>
              <b>Start Time:</b>
              {startTime}
            </p>
            |
            <p>
              <b>Arriving Time:</b>
              {arrivalTime}
            </p>
          </div>
          <div>
            <b>Seat Fare :</b> {seatFare}
          </div>
          <div>
            <b>Order Id :</b> {orderId}
          </div>
        </div>
      ) : (
        <h1 style={{ marginLeft: "350px" }}>
          You haven't made any bookings through Tripfox
        </h1>
      )}
      <div className="gateway__footer">
        <p>
          © 2021 Tripfox Travellers Pvt. Ltd. India. All brands are
          trademarks of their respective owners.
        </p>
      </div>
    </>
  );
};

export default Trips;

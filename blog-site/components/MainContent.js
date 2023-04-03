import React from "react";

export default function MainContent(props) {
  console.log(props);
  return (
    <section>
      <div className="container">
        <img className="photo" src={props.item.imageUrl} />
        <p className="content__text">
          <i className="fa-solid fa-location-pin navigation"></i>
          {props.item.location}{" "}
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          <br />
          <h3>{props.item.title}</h3>
          <h5>
            {props.item.startDate} - {props.item.endDate}
          </h5>
          <p className="mainText">{props.item.description}</p>
        </p>
      </div>
    </section>
  );
}

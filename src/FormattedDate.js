import React from "react";

function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[props.date.getDay()];
  const month = months[props.date.getMonth()];

  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <div>
        {day}, {hours}:{minutes}
      </div>
      <div>
        {month} {date}
      </div>
    </div>
  );
}

export default FormattedDate;

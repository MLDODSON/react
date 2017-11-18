"use strict";

function Person(props) {
  return React.createElement(
    "div",
    { className: "person" },
    React.createElement(
      "h1",
      null,
      props.name
    ),
    React.createElement(
      "p",
      null,
      "Your Age: ",
      props.age
    )
  );
}

var app = React.createElement(
  "div",
  null,
  React.createElement(Person, { name: "Mike", age: "49" }),
  React.createElement(Person, { name: "Paula", age: "25" }),
  React.createElement(Person, { name: "Marie", age: "39" })
);

ReactDOM.render(app, document.querySelector('#app'));
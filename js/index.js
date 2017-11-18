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

ReactDOM.render(React.createElement(Person, { name: "Mike", age: "28" }), document.querySelector('#p1'));

ReactDOM.render(React.createElement(Person, { name: "Marie", age: "39" }), document.querySelector('#p2'));
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Rohit tyagi"),
    React.createElement("h2", {}, "Rohit tyagi 2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Rohit tyagi"),
    React.createElement("h2", {}, "Rohit tyagi 2"),
  ]),
]);

console.log("Parent", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

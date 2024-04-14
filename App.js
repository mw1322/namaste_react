const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello world1"),
    React.createElement("h2", {}, "Hello world2"),
  ]),
],
React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello world1"),
    React.createElement("h2", {}, "Hello world2"),
  ]),
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

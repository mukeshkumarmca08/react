//*****below code is for one element */
const reacthHeader= React.createElement(
    "h1",
    {id:"heading", xyz:"abc"},
    "Print Hello world by React"
);
//React.createelement is a object. it's return the object of react element with type="h1" not the html tag of "h1"
 //console.log(reacthHeader); //returns the object
   const reactroot =ReactDOM.createRoot(document.getElementById("root"));
  reactroot.render(reacthHeader); // render method convert the createelement into html tag and bind into root.

   /****below code is for more then one element
    * <div id="parent">
    * <div id="child">
    * <h1 id="header"></h1>
    * </div>
    * </div>
    */

//    const reacthHeader1= React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div" ,{id:"child"},
//         [React.createElement("h1" ,{},"i am h1 tag"),
//             React.createElement("h2" ,{},"i am h2 tag")]
//     )
// );

/*below code is for more then one element
    * <div id="parent">
    * <div id="child">
    * <h1>i am h1</h1>
    * <h2>i am h2</h1>
    * </div>
    *  <div id="child2">
    * <h1>i am child2 h1</h1>
    * <h2>i am child2 h2</h1>
    * </div>
    * </div>
    */
const reacthHeader1= React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div" ,{id:"child1"},[
            React.createElement("h1" ,{},"i am h1 tag"),
            React.createElement("h2" ,{},"i am h2 tag"),
        ]),
        React.createElement("div" ,{id:"child2"},[
            React.createElement("h1" ,{},"i am child2 h1 tag"),
            React.createElement("h2" ,{},"i am child2 h2 tag"),
        ])
    ]
);

   const reactroot1 =ReactDOM.createRoot(document.getElementById("root1"));
   reactroot1.render(reacthHeader1); // render method convert the createelement into html tag and bind into root.

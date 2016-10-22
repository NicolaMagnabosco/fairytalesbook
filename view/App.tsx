import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<any, any> {
    public render(): JSX.Element {
        return (<div className="ft-main-app">
            Welcome to The Fairy Tales Book
        </div>);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("ft-app"));
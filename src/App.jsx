import React, {Component} from 'react';
import './App.css';
import platform from 'platform';

class App extends Component {
    renderRow = (command, result) => {
        return (
            <tr>
                <td>
                    {command}
                </td>
                <td>
                    {result}
                </td>
            </tr>
        );
    };

    render() {
        const name = platform.name;
        const version = platform.version;
        const layout = platform.layout;
        const os = platform.os;
        const description = platform.description;

        return (
            <div className="App">
                <h1>Platform Information</h1>

                <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <tbody>

                    {this.renderRow("platform.toString()", platform.toString())}
                    {this.renderRow("platform.description", description)}
                    {this.renderRow("platform.layout", layout)}
                    {this.renderRow("platform.manufacturer", platform.manufacturer)}
                    {this.renderRow("platform.name", name)}
                    {this.renderRow("platform.product", platform.product)}
                    {this.renderRow("platform.ua", platform.ua)}
                    {this.renderRow("platform.version", version)}



                    {this.renderRow("", "")}
                    {this.renderRow("", "")}
                    {this.renderRow("", "")}
                    {this.renderRow("", "")}
                    {this.renderRow("platform.os.toString()", os.toString())}
                    {this.renderRow("platform.os.architecture", os.architecture)}
                    {this.renderRow("platform.os.family", os.family)}
                    {this.renderRow("platform.os.version", os.version)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;

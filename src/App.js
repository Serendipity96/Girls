import React, {Component} from 'react';
import './index.less'
import './App.less'
import Login from "./components/Login/Login";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }

    showLogin() {
        this.setState({
            isShow: !(this.state.isShow)
        })
    }

    onChildChanged(newState) {
        this.setState({
            isShow: newState
        });
    }

    render() {
        var isCover = {
            display: 'block'
        }
        var noCover = {
            display: 'none'
        }
        return (
            <div className="container">

                <div className="bg">
                    <nav>
                        <div className="logo">Girls</div>
                        <ul>
                            <li><a>首页</a></li>
                            <li><a>关于</a></li>
                            <li><a onClick={this.showLogin.bind(this)}>登录</a></li>
                        </ul>
                    </nav>
                    <div className="notes">Achieve <strong>your own</strong>goals</div>
                </div>

                <div className="cover" style={this.state.isShow === true ? isCover : noCover}>
                    <Login show={this.state.isShow} callbackParent={this.onChildChanged.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default App;

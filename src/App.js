import React, { Component } from 'react';
import './App.less'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <nav>
            <div className="logo">Girls</div>
            <ul>
              <li><a>首页</a></li>
              <li><a>关于</a></li>
              <li><a>登录</a></li>
            </ul>
          </nav>
          <div className="notes">Achieve <strong>your own</strong>goals</div>
        </div>

      </div>
    );
  }
}

export default App;

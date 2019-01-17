import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Link} from 'react-router'
import './Login.less'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            isShow: this.props.isShow
        }
    }
    closeLogin() {
        console.log("子组件未改变",this.props.isShow)
        let newState = false;
        console.log('子组件 ' ,newState)
        this.setState({
            isShow: newState
        });
        // 这里要注意：setState 是一个异步方法，所以需要操作缓存的当前值
        this.props.callbackParent(newState);
    }
    render() {
        return (

            <div className="login">
                <Tabs>
                    <TabList className="tab-list">
                        <Tab className="tab">登录</Tab>
                        <Tab className="tab">注册</Tab>
                    </TabList>
                    <TabPanel className="tab-panel">
                        <div className="content">
                            <h4>账号</h4>
                            <input placeholder="手机号"/>
                            <h4>密码</h4>
                            <input/>
                        </div>
                        <div>
                            <input type="checkbox" className="choice"/>
                            <span>记住我</span>
                        </div>
                        <button><Link to="/Homepage">登录</Link></button>
                    </TabPanel>
                    <TabPanel  className="tab-panel">
                        <div className="content">
                            <h4>账号</h4>
                            <input placeholder="手机号"/>
                            <h4>昵称</h4>
                            <input/>
                            <h4>密码</h4>
                            <input/>
                        </div>
                        <button>注册</button>
                    </TabPanel>
                </Tabs>
                <div className="close" onClick={this.closeLogin.bind(this)}>×</div>
            </div>
        );
    }
}

export default Login;
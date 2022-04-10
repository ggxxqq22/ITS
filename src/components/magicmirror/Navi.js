import React from 'react';
import { Menu , Button} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined, 
    PictureOutlined,
    CalendarOutlined,
    ControlOutlined,
  } from '@ant-design/icons';
import Appo from './Appo'
import {Control} from './Control'
  


export default class Navi extends React.Component {

    state = {
        collapsed: false,
        key: 1,
    };

    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    changeStyle = function (elem, name, value) {
        elem.style[name] = value;
    }

    handleClick = e => {
        console.log('点击事件', 1)
        this.setState({
            key: e.key
        })
    };

    render() {
        return (
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: '90%',
                height: '80%'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    width: '8%',
                    height: '8%'
                    }}>
                    {/* <Button type="primary" onClick={this.toggleCollapsed} size='large' style={{ marginBottom: 16 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button> */}
                    <Menu
                        className='menu'
                        onClick={this.handleClick}
                        defaultSelectedKeys={['1']}
                        theme="dark"
                        mode="vertical"
                        inlineCollapsed="true">
                        {/* <Menu.Item key="1" icon={<PictureOutlined />}>
                            风格迁移
                        </Menu.Item> */}
                        <Menu.Item key="1" icon={<CalendarOutlined />}>
                            参观预约
                        </Menu.Item>
                        <Menu.Item key="2" icon={<ControlOutlined />}>
                            控制面板       
                        </Menu.Item> 
                    </Menu>
                </div>

                <div style = {{
                    position: 'absolute',
                    top: '13%',
                    left: '0',
                    width: '100%',
                    height: '90%'
                }}>
                    {
                        this.state.key == 3?
                                // <St />
                                (<div></div>)
                            :
                            this.state.key == 1?<Appo />:<Control />           
                    }
                </div>
                
            </div>
        )
    }
}
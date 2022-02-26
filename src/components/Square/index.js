import React, { Component } from 'react'
import "../../index.css"

export default class Square extends Component {
    render() {
        return (
            // <button className="square" onClick={this.props.onClick()}>
            // onClick事件如果包含() ，就会变成执行函数，页面加载后会自动执行。https://blog.csdn.net/qq_35081500/article/details/107314447
            // 如果函数没有要传的参数就可以不用括号 onClick={this.props.onClick}，要传参数的就需要箭头函数的写法 onClick={() => this.props.onClick(xxx)}
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

import React, {Component} from "react";
import  ReactDOM from "react-dom";
function loadStyle(code){
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(code));
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}
export default class App extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    // 动态加载 css
        var code=' html,body{margin:0;padding:0;overflow-y:hidden;overflow-x:hidden}\n' +
            '    li {\n' +
            '        list-style: none;\n' +
            '        float: left;\n' +
            '        width: 100%;\n' +
            '        height: 50%;\n' +
            '        margin: 0 ;\n' +
            '        overflow: hidden;/*超出隐藏*/\n' +
            '        font-size: 0;\n' +
            '\n' +
            '    }\n' +
            '    li img {\n' +
            '        width: 100%;\n' +
            '        height: 100%;\n' +
            '        overflow-x:hidden\n' +
            '    }\n' +
            '    li video{\n' +
            '        width: 100%;\n' +
            '        height: 100%;\n' +
            '        overflow-x:hidden;\n' +
            '        object-fit: fill;\n '  +
            '    }\n' +
            '    ul{\n' +
            '        margin:0;padding:0;\n' +
            '        overflow-x:hidden;\n' +
            '    } '
        loadStyle(code);
        var speed = 1;//设置速度

        var vdo = document.getElementsByTagName("video");//获取id
        vdo.playbackRate = speed;//改变速度
    }

    render() {

        return <ul style={{overflow:"hidden",clear:"both"}}>
                <li>
                    <video src="./m8.mp4" autoPlay muted="muted" loop="loop" id='video'></video>
                    <video src="./m9.mp4" autoPlay muted="muted" loop="loop" id='video'></video>
                </li>
        </ul>

    }

}

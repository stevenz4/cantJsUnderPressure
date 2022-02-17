import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControllerEditor} from 'react-codemirror2';
import { Link } from "react-router-dom";
import './first.css';

export default function First() {
    const [js, setJs] = React.useState('');
    const [resultText, setResultText] = React.useState('');
    var [timer, setTimer] = React.useState(1);
    const [go, setGo] = React.useState(0);

    function mouli() {
        const result = [4, 8, -20, 0, 200];
        const params = [2, 4, -10, 0, 100];

        setResultText('');
        var fct = eval(
            `(${js})`
        )
        result.forEach((x, index) => {
            setResultText(result => [...result, `Passing test number ${index}...\n`]);
            if (fct(params[index]) !== x)
                setResultText(result => [...result, `Not passed\n\n`]);
            else {
                setResultText(result => [...result, `Well Done\n\n`]);
                setGo(go => go + 1);
            }
        })
    }

    var toHHMMSS = (secs) => {
        var sec_num = parseInt(secs, 10);
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor(sec_num / 60) % 60;
        var seconds = sec_num % 60;
    
        return [hours,minutes,seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v,i) => v !== "00" || i > 0)
            .join(":");
    }
    
    React.useEffect(() => {
        setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);
    }, [])
    
    return (
        <div className='first'>
            <div className="firstTop">
                <div className="title">YOU CAN'T<br/>JAVASCRIPT<br/>UNDER PRESSURE</div>
                <div className="timer">{toHHMMSS(timer)}</div>
            </div>
            <Editor value={js} onChange={setJs}/>
            <div className="firstBottom">
                {go === 5 ?
                    <Link to="/exo2" style={{textDecoration: "none"}}>
                        <button className="submitButton">NEXT</button>
                    </Link>
                :
                    <button className="submitButton" onClick={() => {mouli()}}>GO</button>
                }
                <div className="result">
                    {resultText}
                </div>
            </div>
        </div>
    )
}

function Editor(props) {

    const {
        value,
        onChange
    } = props

    function handleChange(editor, data, value) {
        onChange(value);
    }

    React.useEffect(() => {
        onChange(`function doubleInteger(i) {\n\n\t// i will be an integer. Double it and return it.\n\n}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="editorContainer">
            <ControllerEditor
                onBeforeChange={handleChange}
                value={value}
                className="codemirrorWrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    theme: 'material',
                    lineNumbers: true,
                    mode: "javascript"
                }}
            />
        </div>
    )
}
import { useState } from "react";
import { v4 } from 'uuid';

const Edit = ({ add, summittingStatus }) => {

    const [note, setNote] = useState("")
    function noteChange(e) {
        setNote(e.target.value)
    }
    const [date, setDate] = useState("")
    function dateChange(e) {
        setDate(e.target.value)
    }
    const [time, setTime] = useState("")
    function timeChange(e) {
        setTime(e.target.value)
    }

    // 幫button加上onclick的動作，讓useState在動作後新增以下陣列
    function addItem() {
        summittingStatus.current = true
        add(function (prevData) {
            return [{
                id: v4(),
                note,
                date,
                time
            }, ...prevData]
        })
    }
    console.log(note, date, time);

    return (<div>
        <h1>備忘錄</h1>
        <p>記事：</p>
        <input type="text" value={note} onChange={noteChange}></input>
        <p>日期：</p>
        <input type="date" value={date} onChange={dateChange}></input>
        <p>時間：</p>
        <input type="time" value={time} onChange={timeChange}></input>
        <button onClick={addItem} className="add" >新增</button>



    </div>)
}

export default Edit
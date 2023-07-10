import Edit from './Components/Edit'
import List from './Components/List'
import './index.css'
import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    // console.log(data);
    // return data
    setData(data)
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ data })
    })
    // const { data } = await res.json(data)
    // console.log(data);
    // setData(data)
}

const Home = () => {

    const [data, setData] = useState([]);
    // data給List區塊 ，setData給Edit區塊，控制更改的內容

    const summittingStatus = useRef(false);

    // 點擊後變動狀態，從data修改後變動useEffect
    useEffect(() => {
        // 讓原始資料不會因為重新整理而清除
        if (!summittingStatus.current) {
            return
        }
        fetchSetData(data)
            .then(data => summittingStatus.current = false)
    }, [data])

    useEffect(() => {
        fetchData(setData)
        // fetch(API_GET_DATA)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })
        //拿json檔案中id的資料
    }, [])

    return <div className='app'>
        <Edit add={setData} summittingStatus={summittingStatus} />
        <List listdata={data} deleteData={setData} summittingStatus={summittingStatus} />
    </div>
}

export default Home
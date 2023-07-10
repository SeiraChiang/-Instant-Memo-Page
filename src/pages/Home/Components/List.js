import Item from './Item'

// const arr = [1, 2, 3]

const List = ({ listdata, deleteData, summittingStatus }) => {

    return (<div className="list">

        {
            listdata.map((item) => {
                const { note, date, time, id } = item
                return (<Item
                    key={id}
                    id={id}
                    note={note}
                    date={date}
                    time={time}
                    deleteData={deleteData}
                    summittingStatus={summittingStatus}
                />)
            })
            // listdata.map(item => <Item key={item}/>)
            // 原本是一個空陣列，在usestate中加入[1,2,3]
            // 需要加獨一無二的key
        }

        {/* {arr.map(
            // (item => <div>{item}</div>)
            (item => <Item />)
        )} */}

        {/* <Item />
        <Item />
        <Item /> */}

    </div>
    )
}

export default List
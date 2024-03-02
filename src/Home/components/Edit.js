import React,{useState} from 'react'

const Edit = ({addData,addNewData}) => {
  const [note,setNote] = useState('');
  const noteChange = (e) => {
    setNote(e.target.value);
  }
  //每當input變更，更新note值
  const [date,setDate] = useState('-- -- --');
  const dateChange = (e) => {
    setDate(e.target.value);
  }
  //每當input變更，更新date值
  const [time,setTime] = useState('-- --');
  const timeChange = (e) => {
    setTime(e.target.value);
  }
  //每當input變更，更新time值

  const addItem = () => {
    const now = new Date().getTime();
    //以時間為id
    addNewData.current = true;
    //新增事項設為true
    addData((prevData)=>{
        return [
            {
                id:now,
                note,
                date,
                time,
            },...prevData,
        ];
    })
  }

  return (
    <div className='edit'>
        <h1>備忘錄</h1>
        <p>標題:</p>
        <input type='text' value={note} onChange={noteChange}></input>
        <p>日期:</p>
        <input type='date' value={date} onChange={dateChange}></input>
        <p>時間:</p>
        <input type='time' value={time} onChange={timeChange}></input>
        <button className='add' onClick={addItem}>新增</button>
        <hr></hr>
    </div>
  )
}

export default Edit
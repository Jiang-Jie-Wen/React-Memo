import React,{useState} from 'react'

const Edit = ({addData}) => {
  const [note,setNote] = useState('');
  const noteChange = (e) => {
    setNote(e.target.value);
  }
  const [date,setDate] = useState('-- -- --');
  const dateChange = (e) => {
    setDate(e.target.value);
  }
  const [time,setTime] = useState('-- --');
  const timeChange = (e) => {
    setTime(e.target.value);
  }

  const addItem = () => {
    const now = new Date().getTime();
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
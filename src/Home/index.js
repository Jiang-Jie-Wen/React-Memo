import React,{useState,useEffect,useRef} from 'react';
import Edit from './components/Edit';
import List from './components/List';
import './index.css'
import userEvent from '@testing-library/user-event';

const Home = () => {
  const addNewData = useRef(false);
  const delOldData = useRef(false);
  const [data,setData] = useState([{
    id:0,
    note:"歡迎使用備忘錄",
    date:"-- -- --",
    time:"-- --"
  }]);

  useEffect(()=>{
    if(!addNewData.current){
      return
    }
    window.alert('新增成功');
    addNewData.current = false;
  },[data]);

  useEffect(()=>{
    if(!delOldData.current){
      return
    }
    window.alert('事項已刪除');
    delOldData.current = false;
  },[data]);

  return (
    <div className='app'>
        <Edit addData={setData} addNewData={addNewData}/>
        <List ListData={data} delData={setData} delOldData={delOldData}/>
    </div>
  )
}



export default Home;
import React,{useState,useEffect,useRef} from 'react';
import Edit from './components/Edit';
import List from './components/List';
import './index.css'
import userEvent from '@testing-library/user-event';

const Home = () => {
  const addNewData = useRef(false);  //是否新增事項
  const delOldData = useRef(false);  //是否刪除事項
  const [data,setData] = useState([{  //預設資料
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
  //若有新增事項，alert提示'新增成功'

  useEffect(()=>{
    if(!delOldData.current){
      return
    }
    window.alert('事項已刪除');
    delOldData.current = false;
  },[data]);
  //若有刪除事項，alert提示'事項已刪除'

  return (
    <div className='app'>
        <Edit addData={setData} addNewData={addNewData}/>
        <List ListData={data} delData={setData} delOldData={delOldData}/>
    </div>
  )
}



export default Home;
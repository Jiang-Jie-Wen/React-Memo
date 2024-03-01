import React,{useState} from 'react';
import Edit from './components/Edit';
import List from './components/List';
import './index.css'

const Home = () => {
  const [data,setData] = useState([{
    id:0,
    note:"歡迎使用備忘錄",
    date:"-- -- --",
    time:"-- --"
  }]);

  return (
    <div className='app'>
        <Edit addData={setData}/>
        <List ListData={data} delData={setData}/>
    </div>
  )
}



export default Home;
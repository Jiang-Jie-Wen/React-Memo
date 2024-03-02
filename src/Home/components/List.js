import Item from './Item'


const List = ({ListData,delData,delOldData}) => {
  return (
    <div className='list'>
        {
            ListData.map((item)=>{  //將ListData中每筆資料顯示
                return (
                    <Item ItemData={item} delData={delData} delOldData={delOldData}/>   
                )
            })
        }
    </div>
  )
}

export default List
import Item from './Item'


const List = ({ListData,delData,delOldData}) => {
  return (
    <div className='list'>
        {
            ListData.map((item)=>{
                return (
                    <Item ItemData={item} delData={delData} delOldData={delOldData}/>   
                )
            })
        }
    </div>
  )
}

export default List
import Item from './Item'


const List = ({ListData,delData}) => {
  return (
    <div className='list'>
        {
            ListData.map((item)=>{
                return (
                    <Item ItemData={item} delData={delData}/>   
                )
            })
        }
    </div>
  )
}

export default List
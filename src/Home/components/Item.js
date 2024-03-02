const Item = ({ItemData,delData,delOldData}) => {
  const {id,note,date,time} = ItemData;

  const deleteItem = () =>{
    delData((prev) => {
      delOldData.current = true;
      //刪除資料設為true
      return prev.filter(item => item.id !== id)
      //保留非刪除id的資料
    })
  }

  return (
    <div className='item'>
        <div id={id}>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <button className="remove" onClick={deleteItem}>刪除</button>
    </div>
  )
}

export default Item
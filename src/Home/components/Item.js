const Item = ({ItemData,delData}) => {
  const {id,note,date,time} = ItemData;

  const deleteItem = () =>{
    delData((prev) => {
      return prev.filter(item => item.id !== id)
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
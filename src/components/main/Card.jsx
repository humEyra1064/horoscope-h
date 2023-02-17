

const Card = (props) => {
    const{id,title,date,desc,image} = props
  return (
    <div className="cards">
         <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="date">
                <h1>{date}</h1>
            </div>

            <img src={image} alt="" />
            
            <div className="card-over">
                <p>
                    {desc}
                </p>
            </div>
    </div>
  )
}

export default Card

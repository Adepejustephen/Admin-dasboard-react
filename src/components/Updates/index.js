import { updatesData } from '../../utils/data'
import './Updates.css'

const Updates = () => {
  return (
    <div className="updates">
      {updatesData.map((item, id) => {
        return (
          <div className="update" key={id}>
            <div className="image_container">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="notice">
              <div className="subgroup">
                <span>{item.name}</span>
                <span>{item.noti}</span>
              </div>
              <span>{item.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Updates
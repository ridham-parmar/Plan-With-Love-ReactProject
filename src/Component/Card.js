import { useState } from "react";


function Card({tourData, removeTour}) {
    const [readMore, setReadMore] = useState(false) ;
    
    function readMoreHandler() {
        setReadMore(!readMore) ;
    }

    let description = readMore ? tourData.info : tourData.info.substring(0, 200) + "..." ;

    return (
        <div className="card">
            <img src={tourData.image} alt="tour-ig" className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {tourData.price}</h4>
                    <h4 className="tour-name">{tourData.name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? ' Show Less' : 'Read More'}
                    </span>
                </div>
            </div>
            
            <button className="btn-red" onClick={() => removeTour(tourData.id)}>
                Not Interested
            </button>
        </div> 
    );
}

export default Card ;
import React from 'react'

const NewsItem = (props) => {

    let { title, description, imgUrl, newsUrl, author, date } = props;
    return (
        <a href={newsUrl ? newsUrl : ""} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <div>
                <div className="card my-3 mx-2" style={{ width: "18rem" }}>
                    <img src={imgUrl ? imgUrl : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ARPSSCRBYQI6NOKEKL33C6J5VY.jpg&w=1440"} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h6 className="card-title">{title ? title : ""} </h6>
                        <p className="card-text">{description ? description : ""}</p>
                        <p className="card-text"><small className="text-primary"> {author ? `By ${author} on` : ""}  {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl ? newsUrl : ""} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </a>
    )

}

export default NewsItem
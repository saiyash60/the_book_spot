import React from "react";

function Content({ show, item, onClose }) {

    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
        <div>
            <div className="overview">
                <div className="inner-overview">
                    <button className="close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3><br />
                            <h4>{item.volumeInfo.publisher}<br /><span>{item.volumeInfo.publishedDate}</span></h4><br />
                            <a target="_blank" href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>

                    <h4 className="description">{item.volumeInfo.description.substring(0, 1100)}</h4>

                </div>
            </div>
        </div>

    );
}

export default Content;
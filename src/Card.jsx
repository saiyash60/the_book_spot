import React from "react";
import Content from "./Content";

function Card({ book }) {
    const [show, setShow] = React.useState(false);
    const [bookItem, setItem] = React.useState();
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if (thumbnail != undefined && amount != undefined) {
                        return (
                            <div>
                                <div className="bInfo" onClick={() => { setShow(true); setItem(item) }}>
                                    <img className="bookCover" src={thumbnail} alt="book cover pic" />
                                    <div className="sInfo">
                                        <h3 className="bookName">{item.volumeInfo.title}</h3>
                                        <p className="price">&#x20B9; {amount}</p>
                                    </div>
                                </div>
                                <Content show={show} item={bookItem} onClose={() => setShow(false)} />
                            </div>
                        )
                    }
                })
            }
        </>
    );
}

export default Card;
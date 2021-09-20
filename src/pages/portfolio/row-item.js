import React from "react";
import { useHistory } from "react-router-dom";

function RowItem(props) {
    return (
        <div className="item-row">
            <div className="col item-information">
                <div className="item-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="item-details">
                    <div className="item-name">{props.name}</div>
                    <div className="item-subname">{props.subname}</div>
                </div>
            </div>
            <div className="col item-fees">{props.fees}</div>
            <div className="col ">{props.avg}</div>
            <div className="col ">{props.invested}</div>
            <div className="col ">{props.leverage}</div>
            {props.priceChange < 0 ? (
                <div className="col red">{props.priceChange}%</div>
            ) : (
                <div className="col green">{props.priceChange}%</div>
            )}
            <div className="col ">$ {props.value}</div>
            <div className="col btn">SELL</div>
            <div className="col btn">BUY</div>
        </div>
    );
}

export default RowItem;

import React, { useState, useEffect } from "react";
import ActionModal from "../../components/modal";
import RowItem from "./row-item";
import "./portfolio.scss";
import { Link } from "react-router-dom";

function Portfolio() {
    useEffect(() => {
        fetchItem();
    }, []);
    const [item, setItem] = useState([]);

    const fetchItem = async () => {
        const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`
        );
        const item = await data.json();
        setItem(item);
        console.log(item);
    };

    const modal = async () => {
        <ActionModal />;
    };

    return (
        <div className="portfolio-container">
            <div
                className="col btn"
                onClick={() => {
                    modal();
                }}
            >
                BUY
            </div>
            {item.map((item) => (
                <Link to={"/portfolio/" + item.id}>
                    <RowItem
                        image={item.image}
                        name={item.symbol}
                        subname={item.name}
                        fees={item.atl}
                        avg={item.ath}
                        invested={item.circulating_supply}
                        leverage={item.high_24h}
                        priceChange={item.price_change_percentage_24h}
                        value={item.current_price}
                    />
                </Link>
            ))}
        </div>
    );
}

export default Portfolio;

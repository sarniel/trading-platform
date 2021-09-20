import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemDetails({ match }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({
        image: {},
        description: {},
        market_data: { current_price: "" },
    });

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    useEffect(() => {
        fetch(
            `https://api.coingecko.com/api/v3/coins/${match.params.id}?tickers=true&market_data=true&vs_currencies=USD`
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <div className="topBar">
                    <Link className="history-back" to={"/portfolio"}>
                        Back
                    </Link>
                </div>
                <div className="inner-container">
                    <img src={items.image.small} alt="" />
                    <h1>{items.name}</h1>
                    <h2>Symbol: {items.symbol}</h2>
                    <h2>Price: $ {items.market_data.current_price.usd}</h2>
                    <h2>Last Update: {items.last_updated}</h2>
                    <div
                        className="desc"
                        dangerouslySetInnerHTML={{
                            __html: items.description.en,
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default ItemDetails;

import React, { useState } from "react";
import Hello from "./hello";
import Tweet from "./tweet";

function App() {
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const [users, setUsers] = useState([
        { name: "Sarniel", tweet: "Hellow There", likes: "I have 1M likes" },
        { name: "John Snow", tweet: "I am John", likes: "I have 10k likes" },
        { name: "Jane Smith", tweet: "Jane here", likes: "I have 20 likes" },
    ]);

    return (
        <div>
            {users.map((user) => (
                <div>
                    <Tweet
                        name={user.name}
                        tweet={user.tweet}
                        likes={user.likes}
                    />
                </div>
            ))}
        </div>
    );
}

export default App;

import { useState } from "react";

const ShortCircuit = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState("");

    return (
        <section style={{textAlign: "left"}}>
            <h1>Welcome to the ShortCircute Evaluation!</h1>

            {isLoggedIn && <h3>You are logged in!</h3>}

            { isLoggedIn && user ? `Hello, ${user}`: "Please login!" }

            <div className="grid-three-cols" style={{marginTop: "20px", textAlign: "center"}}>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={{margin: "10px"}}>
                    Toggle Login State
                </button>
                <button onClick={() => setUser("Saikat")} style={{margin: "10px"}}>
                    Set User
                </button>
                <button onClick={() => setUser("")} style={{margin: "10px"}}>
                    Clear User
                </button>
            </div>
        </section>
    );
};

export default ShortCircuit;
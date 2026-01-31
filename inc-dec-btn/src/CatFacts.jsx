// learning useStatus and useEffect

import { useState, useEffect } from "react";

function CatFacts(){
    const [fact, setFact] = useState("");
    const [loading, setLoading] = useState(true);

    // function to get data
    const fetchFact = () => {
        setLoading(true);
        fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            setFact(data.fact);
            setLoading(false);
        });
    };

    // run fetchFact once when the component first appears
    useEffect(() => {
        fetchFact();
    }, []); //Empty array = means only run on mount

    return (
        <>
            <div className="p-10 w-full text-center flex flex-col items-center bg-blue-400 ">
                <h2 className="p-5 bg-amber-300 w-max rounded-2xl m-10 font-bold">Daily cat facts</h2>

                <div className="p-5 bg-amber-300 w-max rounded-2xl">
                    {loading ? <p>Loading...</p> : <p>{fact}</p>}
                </div>

                <button onClick={fetchFact} className="mt-7">Get New Fact</button>
            </div>
        </>
        
    );
}

export default CatFacts;
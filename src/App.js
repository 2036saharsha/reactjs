import React, { useState, useEffect } from 'react'

function Header(props) {
    return(
        <header>
            <h1>{props.company}</h1>
        </header>
    );
}



function Body(props){
    return(
        <section>
            <h2>{props.product}</h2>
        </section>
    );

}
const items=["Papya","Guava"];
function Items(props){
    return(
        <footer>
            <ul>
                {props.items.map((items) => (
                    <li>{items}</li>
                ))}
            </ul>
        </footer>
    );

}

function App() {
    const [data, setData] = useState(null);
    const [raila, reset] = useState("Login");
    useEffect(() => {
        fetch("https://api.github.com/users/2036saharsha")
            .then(response => response.json())
            .then(setData);
    }, []);
    return(
        <div className="App">
            <h1>{raila}</h1>
    
            {data ? <h2>{data.login}</h2> : <h2>Loading</h2>}
            <Header company="ASTA BERRY" />
            <Body product="LIP BALM" />
            <Items items={items} />
            
            <button onClick={()=> reset("Logout") }>{raila}</button>

        </div>
    );

}
export default App
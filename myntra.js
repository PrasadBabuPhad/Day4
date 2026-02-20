import React from "react";
import ReactDOM from "react-dom/client"

//Header
//Body
//Footer

function Header(){
  return(
    <div className="heading">
        <img src="https://i.pinimg.com/1200x/8d/46/0b/8d460baa38ee88cb26b7b4ae9adf673e.jpg" height="80px" width="50px"/>
        <div className="options">
            <button>Men</button>
            <button>Women</button>
            <button>Kids</button>
            <button>Home</button>
            <button>Beauty</button>
            <button>GenZ</button>
            <button>Studio</button>
        </div>

        <input placeholder="Search for products brands"></input>

        <div className="">
            <button>Profiles</button>
            <button>Wishlist</button>
            <button>Bag</button>
        </div>
    </div>

  )
}

function Card(props){
    return(
        <div style={{border:"2px solid black", padding:"2px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlUQM7h3vucRodKVHLSFuN0A5a94AxDeWag&s" height="200px" width="200px"/>    
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}


const arr=[{cloth:"T-Shirt", offer:"20-40%Off"},{cloth:"Pant",offer:"30-50%Off"},{cloth:"jeans",offer:"40-70%Off"},{},{}]


function App(){
    return(
        <>

        {/* Header */}
        <Header/>

        {/* //Body */}
        <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
            {/* <Card cloth="T-Shirt" offer="20-80%off"/>
            <Card cloth="Jeans" offer="40-60%off"/>
            <Card cloth="Tsf" offer="24-43%off"/>
            <Card cloth="Kurta" offer="10-40%off"/>
            <Card cloth="Dropw" offer="20-60%off"/>
            <Card cloth="Boom" offer="20-30%off"/>
            <Card cloth="Sleeveless" offer="20-80%off"/> */}

            {
                arr.map((value,index)=> <Card key="index" cloth={value.cloth} offer={value.offer}/>)
            }
        </div>

        {/* //footer */}

        </>
    )
}
const Root =ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
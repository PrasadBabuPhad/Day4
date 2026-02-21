import React,{useState} from "react";
import ReactDOM from "react-dom/client"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import arr from "./utils/dummy"


//Header
//Body
//Footer



function App(){

    let[A,setA]=useState(arr);

    function sortArray(){
        A.sort((a,b)=> a.price-b.price);
        
        setA([...A]) // pass by value abd pass by ref
    }

    function filter499(){
        const b=arr.filter((value)=>value.price>499);
        setA(b);
    }

    function maxdiscount(){
        A.sort()
    }
    
    return(
        <>

        {/* Header */}
        <Header/>
        <button onClick={sortArray}>Sort by Price</button>
        <button onClick={filter499}>Price above 499</button>
        <button onClick={maxdiscount}>Max Discount</button>

        {/* //Body */}
        <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap",color:"white"}}>
            {/* <Card cloth="T-Shirt" offer="20-80%off"/>
            <Card cloth="Jeans" offer="40-60%off"/>
            <Card cloth="Tsf" offer="24-43%off"/>
            <Card cloth="Kurta" offer="10-40%off"/>
            <Card cloth="Dropw" offer="20-60%off"/>
            <Card cloth="Boom" offer="20-30%off"/>
            <Card cloth="Sleeveless" offer="20-80%off"/> */}

            {
                A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
            }
        </div>

        {/* //footer */}
        <Footer/>

        </>
    )
}
const Root =ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
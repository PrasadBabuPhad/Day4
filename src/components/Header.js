export default function Header(){
  return(
    <div className="heading">
        <img  className="images" src="https://i.pinimg.com/1200x/8d/46/0b/8d460baa38ee88cb26b7b4ae9adf673e.jpg" height="80px" width="70px"/>
        <div className="options">
            <button className="but">Men</button>
            <button className="but">Women</button>
            <button className="but">Kids</button>
            <button className="but">Home</button>
            <button className="but">Beauty</button>
            <button className="but">GenZ</button>
            <button className="but">Studio</button>
        </div>

        <input className="searchbar" placeholder="Search for products brands"></input>

        <div className="Profile">
            <button className="pro">Profiles</button>
            <button className="pro">Wishlist</button>
            <button className="pro">Bag</button>
        </div>
    </div>

  )
}
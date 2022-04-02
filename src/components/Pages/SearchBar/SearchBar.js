import React from "react";
// import Box from "../Pages/PagesComponents/box";

const SearchBar = (props) =>{
    return(
        <div className="search">
                <form>
                    <div className="title">
                        <p>{props.title}</p>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder={props.placeholder}  />
                        <button className="search-btn">Search</button>
                    </div>
                </form>
         </div>
    )
}

export default SearchBar;
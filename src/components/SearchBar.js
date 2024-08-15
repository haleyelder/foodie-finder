import { useState } from "react";
import data from "../locations";

function List(props) {
    console.log(props)
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input) || el.type.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.name} - {item.type} - {item.neighborhood}</li>
            ))}
        </ul>
    )
}

export default function SearchBar() {
    const [searchText, setSearchText] = useState("")
    let inputHandler = (e) => {
        let lowerCaseSearch = e.target.value.toLowerCase()
        setSearchText(lowerCaseSearch)
    }
    return (

    <>
      <input type="text" placeholder="search..." onChange={inputHandler}/>
        <List input={searchText}/>
    </>
  );
}

import React, { useState, useEffect } from 'react'
import todo from "./img/todo.png"
import "../App.css"


// get data from local storage
const getlocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list);
    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }

}

const Todo = () => {
    const [inputData, setInputData] = useState('');

    // puting empty array that means items value should be empty array

    const [items, setItems] = useState(getlocalItems());

    //defining add item
    const addItem = () => {
        //using if statement because of void inputs by users
        if (!inputData) {


        } else {
            setItems([...items, inputData]);
            setInputData('')
        }

    }
    //    add with enter button


    //delte the items
    const deleteItem = (id) => {
        console.log(id);
        const updateditems = items.filter((elem, ind) => {
            return ind !== id;
        });
        setItems(updateditems);

    }

    // remove all
    const removeAll = () => {
        setItems([]);
    }

    // store data in local storage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);


    return (
        <>
            <div className="main-div">
                <div className=" child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>You Can Start Adding From Here 👇</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="Make Your List Here" value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />

                        <i className="fa fa-plus add-btn" title='Add Item Or press Enter' onClick={addItem} ></i>
                    </div>

                    <div className="showItems">
                        {
                            items.map((elem, ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3>{elem}</h3>
                                        <i className="far fa-trash-alt add-btn" title="Delete Items" onClick={() => deleteItem(ind)}></i>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {/* clear All buttons and remove button */}
                    <div className="showitems">
                        <button className="btn effect04" data-sm-link-text="remove All" onClick={removeAll}><span>check List</span></button>

                    </div>

                </div>

            </div>

        </>
    )
}
export default Todo;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../../redux/actions/expenses";
import './topfold.css';

const Topfold = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const handleQuery = (e) => {
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value));
    } 
    return (
        <div className="topfold">
            {
                window.location.pathname === '/' ?
                <div className="home-topfold">
                    <div className="searchbar">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                        value={query} placeholder="Search for expenses" onChange={(e)=> handleQuery(e)}/>
                    </div>
                    <Link to="/add-expense">
                        <div className="add-button">
                            <i className="fa-solid fa-circle-plus"></i>
                            <label>Add</label>
                        </div>
                    </Link>
                </div>
                :
                <div className="add-topfold">
                    <Link to='/'>
                        <div className="add-topfold-button">
                            <i className="fa-solid fa-angle-left"></i>
                            <label>Back</label>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className="add-topfold-button">
                            <i className="fa-solid fa-xmark"></i>
                            <label>Cancel</label>
                        </div>
                    </Link>
                </div>
            }
            
        </div>
    )
}

export default Topfold;
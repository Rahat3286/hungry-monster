import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {

    const searchFood = () => {
        const searchText = document.getElementById('search-field').value;
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('Something Went Wrong!! Please try again later!'))
    }

    return (
        <div className="container-fluid ">
            <div className="col-md-6 mx-auto">
                <h1 className="text-center">This is Home</h1>
                <div className="search-box my-5">
                    <input id="search-field" type="text" className="form-control" placeholder="Enter your artist song name" />
                    <button onClick={searchFood} className="btn btn-success search-btn">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
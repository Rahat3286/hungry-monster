import React from 'react';
import './Home.css';

const Home = () => {

    const handleSearch = () => {
        console.log('button clicked')
    }

    return (
        <div className="container-fluid ">
            <div className="col-md-6 mx-auto">
                <h1 className="text-center">This is Home</h1>
                <div className="search-box my-5">
                    <input id="search-field" type="text" className="form-control" placeholder="Enter your artist song name" />
                    <button onClick={handleSearch} className="btn btn-success search-btn">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
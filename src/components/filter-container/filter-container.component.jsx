import React from 'react';
import DatePicker from 'react-date-picker';

import './filter.styles.css';

const FilterContainer = ({dateFilterValue, setDateFilter}) => {


    const handleChange = (date) => {
        setDateFilter(date);
    };

    return (
        <div className="container my-3">
            <div className="row align-items-center">
                <div className="col-auto">
                    Filter by
                </div>
                <div className="col-auto">
                    <DatePicker 
                    onChange={handleChange}
                    value={dateFilterValue}/>
                </div>
                
            </div>
        </div>
    )
};

export default FilterContainer;
import React from 'react';

const Filter = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = { ...filters, [name]: value };

        if (setFilters) { 
            // if (name === 'favoured') { 
            //     setFilters({ ...filters, favorite: value === 'any' ? 'any' : value === 'favoured' ? true : false });
            // }

            setFilters(newValue);
        }
    };

    return (
        <div className="pet-filter-container w-full">
            <div className="filter-container flex flex-col mb-3">
                <label className="font-medium" htmlFor="favoured">Favourite</label>
                <select name="favoured" onChange={handleChange} id="favoured" className="form-select rounded-sm h-8 px-2">
                    <option value="any">Any</option>
                    <option value="favoured">Favoured</option>
                    <option value="not favoured">Not favoured</option>
                </select>
            </div>
            <div className="filter-container filter-container flex flex-col mb-3">
                <label className="font-medium" htmlFor="gender">Gender</label>
                <select name="gender" id="gender" onChange={handleChange} className="form-select rounded-sm h-8 px-2">
                    <option value="any">Any</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;

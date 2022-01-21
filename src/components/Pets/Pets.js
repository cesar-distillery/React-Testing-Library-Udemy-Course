import React from 'react';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import http from 'axios';
import { useMemo } from 'react';

const Pets = () => {
    const [cats, setCats] = React.useState([]);
    const [filters, setFilters] = React.useState({});

    const fetchCats = async () => {
        const response = await http.get('http://localhost:4000/cats');

        setCats(response.data);
    };

    React.useEffect(() => {
        fetchCats();
    }, [])

    const catsList = useMemo(() => {
        console.log('reading list')
        let catsFiltered = [
            ...cats,
        ];

        if (filters.gender && filters.gender !== 'any') {
            catsFiltered = cats.filter(cat => cat.gender === filters.gender);
        }

        if (filters.favoured && filters.favoured !== 'any') {
            catsFiltered = catsFiltered.filter(cat => cat.favoured === (filters.favoured === "favoured" ? true : false));
        } 

        return catsFiltered;
    }, [cats, filters]);


    return (
        <div className="container">
            <div className="app-container flex m-5 ">
                <div className="p-4 bg-gray-200">
                    <Filter filters={filters} setFilters={setFilters} />
                </div>
                <div className="p-4">
                    <Cards cats={catsList} setCats={setCats} />
                </div>
            </div>
        </div>
    );
};

export default Pets;

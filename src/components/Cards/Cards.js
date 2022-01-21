import React from 'react';
import Card from '../Card/Card';

const Cards = ({ cats, setCats }) => {
    const updateFavourite = (index, favoured) => {
        const updatedCats = [...cats];
        updatedCats[index].favoured = favoured;
        setCats(updatedCats);
    };

    return (
        <div className="pets-cards-container flex flex-wrap">
            {
                cats.map((cat, index) => (
                    <Card key={cat.id} {...cat} index={index} updateFavourite={updateFavourite} />
                ))
            }    
        </div>
  ) ;
};

export default Cards;

import React from 'react';
import './Card.css'

const Card = ({
    name,
    phone,
    email,  
    image,
    favoured,
    updateFavourite,
    index,
}) => {
    const [isFavorited, setIsFavorited] = React.useState(favoured);

    const toggleFavorite = () => {
        updateFavourite(index, !isFavorited);
        setIsFavorited(!isFavorited)
    }
    

    return (
        <article className="card">
            <div className="card-header">
                <img src={image.url} className="cat-photo" alt={image.alt} />
                <button className="heart" onClick={toggleFavorite}>
                    {isFavorited ? (
                        <img className="w-8 h-8" src="https://img.icons8.com/color/48/000000/hearts.png" alt="Filled heart" />
                    ) : (
                        <img className="w-8 h-8" src="https://img.icons8.com/color/48/ff0000/heart" alt="Outlined heart" />
                    ) }
                </button>
            </div>
            <div className="card-content">
                <h3>{ index } - {name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </article>
    );
};

export default Card;

import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const heroImage = require.context('../../assets/heroes', true );

export const HeroPage = ({history}) => {

    console.log("HERO IMAGE",heroImage);
    console.log("HERO IMAGEeeeee",heroImage(`./dc-superman.jpg`));
    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    if (!hero){
        return <Redirect to="/marvel"/>
    }

    const {superhero, publisher, alter_ego, first_appearance, characters} = hero;

    const handleReturn = () => {

        if(history.length <= 2){
            history.push('/');
        }
        else{
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                src={heroImage(`./${heroeId}.jpg`).default} 
                alt={superhero} 
                className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>{alter_ego}</b></li>
                    <li className="list-group-item"><b>{publisher}</b></li>
                    <li className="list-group-item"><b>{first_appearance}</b></li>

                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    )
}

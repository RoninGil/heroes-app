import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';
const queryString = require('query-string');

export const SearchPage = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)

    const [formData, handleInputChange] = useForm({
        input: ''
    });
    const {input} = formData;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${input}`)
    }

    return (
        <div>
            <h1>Search Page</h1>
            <hr/>

            <div className="row">
                <div className="col-4">
                    <h4>Search Form</h4>
                    <form
                        onSubmit={handleSearch}>
                        <input 
                        type="text"
                        name="input"
                        placeholder="Find hero"
                        className="form-control"
                        autoComplete="off"
                        value={input}
                        onChange={handleInputChange}
                        />

                        <button
                        type="submit"
                        className="btn btn-block btn-primary">
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-8">
                    <h4>Results</h4>
                    <hr/>
                    {(q==='')&&
                    <div className="alert alert-info">
                        Search a hero
                    </div>
                    }
                    {(q!=='' && heroesFiltered.length === 0)&&
                    <div className="alert alert-danger">
                        No hero with that name
                    </div>
                    }
                    {
                        heroesFiltered.map((hero)=>{
                            return <HeroCard 
                                key={hero.id}
                                {...hero}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

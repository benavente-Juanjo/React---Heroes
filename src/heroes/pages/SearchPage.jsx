import React from 'react'
import { HeroCard } from '../components/HeroCard'
import { useForm } from '../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroByName } from '../helpers/getHeroesByname';
import queryString from 'query-string';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  
  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSeachSubmit = (event) =>{
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText}`)

  }

  return (
    <>
      <h1>Search</h1>
      <hr/>
      <div className="row">
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSeachSubmit }>
            <input 
              type='text'
              placeholder='Searh a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={ searchText }
              onChange={ onInputChange }
            />

          <button className='btn btn-outline-primary mt-1'>
            Search
          </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {
            ( q === '')
            ? <div className="alert alert-primary"> Search a hero</div>
            : ( heroes.length === 0 ) 
            && <div className="alert alert-danger">  No hero with <b>{ q }</b> </div>
          }

          { 
            heroes.map( hero => (
              <HeroCard key={ hero.id } {...hero}/>
            ))

          }

        </div>
     </div>
    </>
  )
}

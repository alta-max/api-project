import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setsearchTerm } = useGlobalContext();
  const searchValue = React.useRef("")
  React.useEffect(() => {
    searchValue.current.focus()
  })
  const searchCocktail = () => {
    setsearchTerm(searchValue.current.value);
  }
  return (
    <section className="section search" onSubmit={(e) => e.preventDefault()}>
      <form action="" className="search-form">
        <div className="form-control">
          <label htmlFor="name">search Your Favourite Cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm

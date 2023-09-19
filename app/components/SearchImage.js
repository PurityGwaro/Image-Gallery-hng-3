import React, { useState } from "react";

function SearchImage({ setSearchString }) {
  const [query, setQuery] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchString(query)
    // console.log('query:', query)
    setQuery('')
  }
  return (
    <form className="grid w-full gap-10 px-4 mx-auto mb-10 text-black md:grid-cols-2 md:px-0" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter any name to search for images"
        className="py-4 pl-4 bg-white rounded-xl"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="w-1/2 py-4 pl-4 text-xl font-semibold text-white bg-orange-600 rounded-xl place-self-center" type="submit">
        SEARCH
      </button>
    </form>
  );
}

export default SearchImage;

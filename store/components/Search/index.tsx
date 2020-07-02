import React, {useState, useEffect} from 'react'
import { FiSearch } from 'react-icons/fi'
import { useDebounce } from 'use-debounce'
import { Container } from './styles'

interface SearchProps {
  placeholder: string;
  handleSearch: (term: string) => Promise<void>
}


const Search: React.FC<SearchProps> = ({placeholder, handleSearch}) => {
  const [search, setSearch] = useState<string>()
  const [debounceSearch] = useDebounce(search, 1000)

  useEffect(() => {
    handleSearch(debounceSearch)
  }, [handleSearch, debounceSearch])
  return (
    <Container>
      <FiSearch size={20} />
      <input 
        type="text" 
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
      /> 
    </Container>
  )
}

export default Search;
import { useEffect } from 'react'

const Countries = ({
  countrySearched,
  countries,
  setCountries,
  countriesNames
}) => {
  
  useEffect(() => {
    setCountries(countriesNames.filter(countryNames => (
      countryNames.some(countryName => (
        countryName.toLowerCase().includes(countrySearched.toLowerCase())
      ))
    )))
  }, [countrySearched])
  
  
  if (countrySearched === "" || countries.length === 1) return null
  
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  
  
  
  return (
    <ul style={{listStyleType: 'none', padding: 0}}>
      {countries.map(country => (
        <li key={country[0]}>
          {country[0]}
        </li>
      ))}
    </ul>
  )
}


export default Countries
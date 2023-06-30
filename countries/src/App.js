import { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Countries from './components/Countries'
import Info from './components/Info'

const App = () => {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesNames, setCountriesNames] = useState([])
  const [countryData, setCountryData] = useState(null)
  
  useEffect(() => {
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      setCountriesNames(response.data.map(country => {
        return Object.values(country.name).slice(0, 2)
      }))
    })
  }, [])
  
  return (
    <>
      <Search country={country} setCountry={setCountry} />
      
      <Countries
        countrySearched={country}
        countries={countries}
        setCountries={setCountries} 
        countriesNames={countriesNames}
      />
      
      <Info countries={countries} countryData={countryData} setCountryData={setCountryData}/>
    </>
  )
}

export default App;

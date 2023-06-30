import axios from 'axios'
import { useEffect } from 'react'

const Info = ({countries, countryData, setCountryData}) => {
  
  useEffect(() => {
    if (countries.length === 1) {
      const country = countries[0][0]
  
      axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
      .then(response => {
        setCountryData(response.data)
      })
    } else {
      setCountryData(null)
    }
  }, [countries])
  
  if (!countryData || countries.length !== 1) return null
  if (countryData.name.common !== countries[0][0]) return null
  
  
  return (
    <div>
      <h2>{countryData.name.common}</h2>
      
      <p>{`capital ${countryData.capital}`}</p>
      <p>{`area ${countryData.area}`}</p>
      
      
      <h3>languages:</h3>
      <ul>
        {(Object.entries(countryData.languages).map((language) => (
          <li key={language[0]}>{language[1]}</li>
        )))}
      </ul>
      <img src={countryData.flags.svg} height={250} />
    </div>
  )
}

export default Info
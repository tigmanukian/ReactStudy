import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const favorites = 'favoriteList';

function Country() {

   const params = useParams()

   const [country, setcountry] = useState();

   const [isadded, setIsadd] = useState(isCountryAdded);

   function isCountryAdded() {
      const list = JSON.parse(localStorage.getItem(favorites));
      return !!list.find((item) => item === params.code)
   }


   useEffect(() => {
      if (params?.code) {
         setIsadd(isCountryAdded())
      }
   }, [params]);

   useEffect(() => {
      if (params.code) {
         fetch(`https://restcountries.com/v3.1/alpha/${params.code}`)
            .then(res => res.json())
            .then((res) => {
               const curentCountrey = res[0];
               setcountry(curentCountrey);
               console.log(curentCountrey, "curentCountrey")
            })
      }
   }, [params]);

   const handleFavoriteInputChange = (e) => {
      const list = JSON.parse(localStorage.getItem(favorites)) || [];
      const favorite = country.cca2;

      if (e.target.checked) {

         list.push(favorite);
         localStorage.setItem(favorites, JSON.stringify(list))
      } else {
         const newList = list.filter((item) => item !== favorite)
         localStorage.setItem(favorites, JSON.stringify(newList))
      }
      setIsadd(e.target.checked);
   }

   return country ? (
      <div>
         <label htmlFor="favorite">
            <input onChange={handleFavoriteInputChange}
               type="checkbox"
               name="favorite"
               id="favorite"
               checked={isadded} />
         </label>
         <h3> name: {country.name.common}</h3>
         <p > languages:{country.languages.ara}</p>
         <img src={country.flags.png} alt="flag" />
      </div>
   ) : null;
}

export default Country;
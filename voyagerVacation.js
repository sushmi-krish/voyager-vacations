//fetch('travel_recommendation_api.json')
//.then(response =>{return response.json()})
//.then(temple => console.log(temple.temples))
//.then(data =>{ console.log(data.beaches)})
const input = document.getElementById('input').value.toLowerCase();
const btnOne = document.getElementById('buttonOne');
const btnTwo = document.getElementById('buttonTwo');
const result =document.getElementById('result')
btnOne.addEventListener('click',()=>{
    fetch('travel_recommendation_api.json')
.then(response =>{return response.json()})
.then(data =>{
    console.log(data)
 if(data.countries.cities){
  const country = data.countries.find(item => item.name.toLowerCase() === input.value.toLowerCase())
   console.log(country);
   const cities = country.cities;
    console.log(cities)
    cities.forEach(city => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src =`${city.imageUrl}`;     
        div.appendChild(img)  
          
        let h1 = document.createElement('h1')
        h1.innerHTML= `${city.name}`
        div.appendChild(h1);

        let p = document.createElement('p')
        p.innerHTML =`${city.description}`
        div.appendChild(p)
        result.append(div)
        
    })
}
   else if( data.temples){
   console.log(data.temples.find(item => item.name.toLowerCase() === input.value.toLowerCase()))
    console.log(temple)
   }
   else{
    const beach = data.beaches.find(item => item.name.toLowerCase() === input.value.toLowerCase())
   console.log(beach)
   }
})

.catch(error =>{
    console.log(error)
   let h1 = document.createElement('h1')
   h1.innerHTML = error;
})


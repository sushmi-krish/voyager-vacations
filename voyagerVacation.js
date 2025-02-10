//fetch('travel_recommendation_api.json')
//.then(response =>{return response.json()})
//.then(temple => console.log(temple.temples))
//.then(data =>{ console.log(data.beaches)})
const input = document.getElementById('input')
const btnOne = document.getElementById('buttonOne');
const btnTwo = document.getElementById('buttonTwo');
const result =document.getElementById('result')
btnOne.addEventListener('click',()=>{
    fetch('travel_recommendation_api.json')
.then(response =>{return response.json()})
.then(data =>{

  const country = data.countries.find(item => item.name.toLowerCase() === input.value.toLowerCase())
 if(country){
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
        input.value = '';
    })
  }
else if(input.value.toLowerCase() ==='temples'){
    let temples =data.temples;
   temples.forEach(temple =>{
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src =`${temple.imageUrl}`
    div.appendChild(img)

    let h1 =document.createElement('h1')
    h1.innerHTML =`${temple.name}`;
    div.appendChild(h1)

    let p =document.createElement('p');
    p.innerHTML=`${temple.description}`;
    div.appendChild(p)
    result.append(div)
    input.value='';
   })
}
else if(input.value.toLowerCase() ==='beaches'){
    let beaches = data.beaches;
   
    beaches.forEach(beach =>{
     let div = document.createElement('div')
     let img = document.createElement('img')
     img.src =`${beach.imageUrl}`
     div.appendChild(img)
 
     let h1 =document.createElement('h1')
     h1.innerHTML =`${beach.name}`;
     div.appendChild(h1)
 
     let p =document.createElement('p');
     p.innerHTML=`${beach.description}`;
     div.appendChild(p)
     result.append(div)
     input.value ='';
    })
    
}
else {
    result.innerHTML = '<p>No matching results found. Please try again.</p>';
  }
})
.catch(error => {
    console.error('Error fetching the data:', error);
    result.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    input.value=''
  });

})
btnTwo.addEventListener('click',()=>{
    result.style.display='block';
    result.innerHTML='';
})

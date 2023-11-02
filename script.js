
var res = fetch("https://restcountries.com/v2/all");

res.then((data)=>data.json()).then((data1)=>{
    for (let i=0; i<data1.length; i++){
        var div = document.createElement("div");

        div.innerHTML = ` <div class="row">
        <div class="cols-3 card-column">
        <div class="card" style="width: 100rem">
        <div class="card-body ">
          <h5 class="card-title">Country Name : ${data1[i].name}</h5>
          <img src = "${data1[i].flag}" height="50%" width=50%>
          <h5 class="card-titl">Capital : ${data1[i].capital} </h5>
          <h5 class="card-tit">Regiion : ${data1[i].region} </h5>
          <h5 class="card-ti">Country Code : ${data1[i].alpha3Code}</h5>
          <button onClick="block(name)">button</button>      
          </div>
          </div>
        </div>
      </div>`;
        document.body.append(div);
    }

   
});

function block(name){

  var WAPI = `  https://api.openweathermap.org/data/2.5/weather?q=name&appid=fd589e28fc3b4a1edb70eb06503be786
  `

  console.log(name);
 fetch(WAPI)
 .then((response) => response.json())
 .then((data)=> {

     alert(`
               
     Current Humidity is ${data.main.humidity}
     Current Pressure is ${data.main.pressure}
     Current Temperature is ${data.main.temp}`)
    })
}
  
document.addEventListener("click",(event) => event.preventDefault());

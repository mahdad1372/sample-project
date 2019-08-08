

 const CreateCars = (() => {

    const cars = [];

    class Car {
        constructor(make, country,image,special,model,price,type,trans,gas){
            this.make = make;
            this.country = country;
            this.image = image;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas;
        }
    }


    function makeCar(make,counrty,image='image/car-default.jpg' , special = true, model = 'new model', price=10000 ,
    type = 'sedan', trans = 'automatic', gas = '50')
    {
    const car = new Car(make, counrty, image, special, model, price, type, trans, gas);
    cars.push(car);
    }

    function produceCars(){
        makeCar('chevy', 'american','image/chevrolet-camaro-rod-01.jpg',true,2015);
        makeCar('bmw' , 'german', 'image/car-german-1.jpg', true , 1993);
        makeCar('chevy' , 'american', 'image/chevrolet-camaro-rod22-01.jpg', true,2016);
        makeCar('mercedes' , 'german', 'image/car-german-2.jpg', false, 2018);
        makeCar('porsche' , 'german', 'image/car-german-4.jpg',undefined,2018);
        makeCar('hummer' , 'american', 'image/hummer1-01.jpg', false,2017);
    }

    produceCars();
    //console.log(cars);
    
    const specialCars = cars.filter(car => car.special === true)
    //console.log(specialCars);
    const germancars = cars.filter(car => car.country === 'german')
    //console.log(germancars);

    const americancars = cars.filter(car => car.country === 'american')
    //console.log(americancars);

    return {
        cars,
        specialCars,
        americancars,
        germancars
    }
 })();
 
 const DisplaySpecialCars = ((CreateCars) => {
 const specialcar = CreateCars.specialCars;
  
  const info = document.querySelector('.featured-info');

  document.addEventListener('DOMContentLoaded' , () => {
      info.innerHTML = '';

      let data = '';

      specialcar.forEach(item =>{
          data+= `<div class="box" data-image="${item.image}">
          <div class="featured-item my-3 d-flex p-2 text-capitalize align-item-baseline flex-wrap">
          <span data-image="${item.image}" class="featured-icon mr-2 py-1">
              <i class="fas fa-car"></i>
          </span>
          <h5 class="font-weight-bold mx-1">${item.make}</h5>
          <h5 class="mx-1">${item.model}</h5>
      </div>
      </div>`
      })
      info.innerHTML = data;
  })
  
      info.addEventListener('click', (event) => {
      if(event.target.parentElement.classList.contains('box') || event.target.parentElement.
      classList.contains('featured-icon') ) {
       const img = event.target.parentElement.dataset.image;
       document.querySelector('.featured-photo').src = img;
      }
      })
 })(CreateCars);


 const DispalyCars = ((CreateCars) => {
     const cars  = CreateCars.cars ;
     const inventory = document.querySelector('.inventory-container');
     document.addEventListener('DOMContentLoaded' , () => {
     inventory.innerHTML = '';

     let output = '';
     cars .forEach((car) => {
         output += `<div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
         <div class="card car-card">
             <img src="${car.image}" class="card-img-top car-img" alt="">
             <div class="card-body">
                 <div class="car-info d-flex justify-content-between">
                     <div class="car-text text-uppercase">
                         <h6 class="font-weight-bold">${car.make}</h6>
                         <h6>${car.model}</h6>
                     </div>
                     <h5 class="car-value align-self-center py-2 px-3">$
                         <span class="car-price">${car.price}</span>
                     </h5>
                 </div>
             </div>
             <div class="card-footer text-capitalize d-flex justify-content-between">
                 <p><span><i class="fas fa-car"></i></span>${car.type}</p>
                 <p><span><i class="fas fa-cogs"></i></span>${car.trans}</p>
                 <p><span><i class="fas fa-gas-pump"></i></span>${car.gas}</p>
             </div>
         </div>
     </div>`
     })

    inventory.innerHTML = output;
     });
     
     


 })(CreateCars);



 const FilterCars =(() =>{

     const filter = document.querySelectorAll('.filter-btn');

     filter.forEach((btn) =>{
         btn.addEventListener('click',(event) =>{
             const value = event.target.dataset.filter;
             const singlecars = document.querySelectorAll('.single-car');
             //const singlecars2 = document.querySelectorAll('.german');
             //console.log(singlecars2);

             singlecars.forEach(car =>{
                 if(value === 'all'){
                     car.style.display = 'block';
                 }
                 else {
                     (!car.classList.contains(value)) ? car.style.display ='none' :
                     car.style.display = 'block';
                 }
             })
         })
         
     })
 })();
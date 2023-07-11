let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
        "color": "red",
        "type": "jeep",
        "registration": new Date('2018-03-03'),
        "capacity": 5
      },
   
  ]

  let count=0;
   cars.forEach((cars)=>{
    if(cars.color=="purple"){
   count++;
    }
  })
 console.log (`the number of cars in purple is `+count);
// find function
let carcolor;

carcolor = cars.find(carcolors => (carcolors.color=="red"))
  console.log(`first red colour car details ${carcolor.color}`);
  console.log(carcolor);

  // filter function
  let carcolor1;
  carcolor1 = cars.filter(carcolors1 => (carcolors1.color=="red"))
  console.log(`total number of car in red color`);
  console.log(carcolor1);

  // map function
  const bas = (obj) => {
    newObj = {};
    newObj.name = obj.color;
    
    return newObj;
};

let newArr = cars.map(bas);

console.log(`only the color of the cars are printed`);

console.log(newArr);


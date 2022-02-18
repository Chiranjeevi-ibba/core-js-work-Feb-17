function add(...args) {
    sum = args.reduce((total,val)=>{
        return 
      },0)
}

let arr = [10, 20, 30];
let [x, y, z] = arr;
console.log(x,y,z)
let obj = { fname: "sai", lname: "ibba" }
let { fname, lname } = obj;
console.log(fname+' - '+lname)

let arr2=[1,2,3,4,5,6,7,8,9,10];
let evenNumbers=arr2.filter(val => val>5);
console.log(evenNumbers);

let emp=[
    {name:"sai",salary:45678,dept:"it"},
    {name:"chiranjeevi",salary:95678,dept:"accounts"},
    {name:"Teja",salary:85678,dept:"it"},
    {name:"Varma",salary:65678,dept:"accounts"},
    {name:"Rahul",salary:66678,dept:"accounts"},
    {name:"Raja",salary:55678,dept:"it"}
]
let accountsEmp=emp.filter(val=> val.dept=="accounts");
let filtered=emp.filter(val=> val.salary>=50000 )
console.log(accountsEmp)
console.log(filtered)

let arr3 = [1,2,3,4,5]
let cubeArr=arr3.map(val=> val*val*val);
console.log(cubeArr)

let salary=[10000, 12000, 15000, 20000, 25000];
let totSal=salary.reduce((total,val)=>{
  return total+val
},0)
console.log(totSal)
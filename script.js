//N1
let user = {
    firstname:'giorgi',
    lastname:'smith',
    age: 25,
    studentstatus: 'active'

};
console.log(user.studentstatus);
//console.log(user['studentstatus']);

//N2
//for loop
//firts version
//let array = ['name', 6, 10, 25, 'javascript', 7, 4, 100, 'x', 36, 89];
//for (let x=0; x<array.length; x++){
    //console.log(array[x]);
//}
//second version
let array = ['name', 6, 10, 25, 'javascript', 7, 4, 100, 'x', 36, 89];
for (let x of array){
    console.log(x);
}
//while loop
let arrays = ['name', 6, 10, 25, 'javascript', 7, 4, 100, 'x', 36, 89];
let i = 0
while (i<arrays.length){
    console.log(arrays[i]);
    i++
}

//N3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let i of numbers){
    if(i>5){
        console.log(i)
    }
}

//N4
let user2 = {
    name: 'giorgi2',
    age:  20,
    studentstatus: 'active'
}
if (user2.age < 18 && user2.studentstatus ==active ){
    console.log('Hello')
}else if (user2.name == 'giorgi2'){
    console.log('hello levani');
}else if(user2.studentstatus=='active' || user2.age <25){
    console.log('hello world');
}else{
    console.log('error')
}

//N5
let array2 = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
for (let item of array2){
    if (typeof item =='string'){
        console.log(item);
    }
}
//N6
let array3 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];
for (let x of array3){
    for(let y of x){
        if (y > 0){
            console.log(y);
        }
    }
}

//N7
let array4 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for (let x of array4){
    if( x % 2==0){
        console.log(x);
    }
}
let array5 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for (let x of array5){
    if( x % 2==1){
        console.log(x);
    }
}

//N8
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for (let x of users){
    if(x.status==true ){
        console.log(x);
    }
}
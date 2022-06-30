
 let userName =  prompt('Ingrese su nombre por favor');
 let userLastName = prompt('Ingrese su apellido por favor');
 let today = moment().format('DD/MM/YYYY');

alert('Para ingresar la fecha ingresala con este formato "2022-06-29" ')

var userBday = moment(prompt("ingrese su fecha de nacimiento")).format("DD/MM/YYYY");

console.log(today);
console.log(userBday);

let miliSecondYear = 3.154e+10;
let userAge = today.diff(userBday, 'years').text(userAge) ;
let user = {
    userName : userName,
    userLastName : userLastName,
    
}


function User (userName, userLastName, userAge) {
   
    this.userName = userName,
    this.userLastName = userLastName,
    this.userAge = userAge
 
 }
 let userData = new User (userName, userLastName, userAge);

 console.log(userData)

 let reservationDate = moment(prompt("ingrese su fecha de reserva")).format("DD/MM/YYYY");
 console.log(reservationDate);

 while (reservationDate < today) {

    alert('estas ingresando una fecha incorrecta tiene que ser mayor a ' + today.toLocaleString());
    
    reservationDate = moment(prompt('ingrese una fecha superior a la del dia de la fecha'));
    
    
    }
    
    let diferenciaDias = reservationDate.diff(today, 'days');
    
    console.log(Math.floor(diferenciaDias));
    
    alert(`Ingresaste esta fecha: ${fecha3.toLocaleString()}Tu reserva sera en: ${diferenciaDias} dias`);

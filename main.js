console.log('hello node js');
const pin = process.env.API_KEY;


console.log(pin);

const user = process.argv[2]
console.log(process.argv);


/* if(!pin || !user){
    console.log('Access Restricted')
    process.exit(1)
}else{
    console.log('Welcome admin')
} */

if(pin == 1234 && user == "admin"){
    console.log('Welcome admin');
} 
else{ 
    console.log('Access Restricted');
    process.exit(1)

}
// how to find the palandrom number aur sting 

const name='1234321'



console.log(name[0,1]);



if(name[0]==name.charAt(name.length -1)&&name[1]==name.charAt(name.length -2)&&name[2]==name.charAt(name.length -3)){
    console.log('its a palandrom number!!')
}else{
    console.log('its not a palandrom number');
}
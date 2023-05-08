const myinfo = {
    name: 'Wendy',
    address: '1234 street name',
    city: 'Atlanta',
    state: 'GA',
    zip: '12345'
};


function printContact(info) {
    console.log(info.name);
    console.log(info.address);
    console.log(info.city + " ," + info.state +" "+info.zip);
}
printContact(myinfo);
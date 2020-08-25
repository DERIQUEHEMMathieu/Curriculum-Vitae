function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date("1986/10/31");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('Age').innerHTML= age+' ans';
    return age;
  
}
console.log('age: ' + getAge());
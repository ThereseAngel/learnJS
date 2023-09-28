// Object Methods and 'This' Keyword

const user = {
    name: 'Angel',
    age: 22,
    isMarried: false,
    friends: ['Kez', 'Karl'],
    selectColor: null,
    calculateAge: function(){
        console.log(`I am ${this.age} Angel`)
    }
}

user.calculateAge();
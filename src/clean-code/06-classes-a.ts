(()=>{
    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    const newPerson =  new Person('Stiven Yepez', 'M', new Date('1995-03-16'));
    console.log({newPerson});

})();
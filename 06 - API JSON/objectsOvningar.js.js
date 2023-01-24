const bil = {
    make: 'Audi',
    model: '80',
    year: 1991,
    speed: 0,
    logInfo(){
        console.log(this.make, this.model, this.year);
    },
    increaseSpeed(targetSpeed){
        // for(let i=0; i<targetSpeed; i+=5){
        //     this.speed +=5;
        //     console.log(this.speed);
        // }
        while(this.speed<targetSpeed){
            this.speed +=5;
            console.log(this.speed);
        }
    },
    break(){
        while(this.speed>0){
            this.speed -=5;
            console.log(this.speed);
        }
    }
};

// console.log(bil);
bil.logInfo();
bil.increaseSpeed(100);
bil.break();

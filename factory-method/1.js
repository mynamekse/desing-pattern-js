"use strict"
class Vehicle{
    constructor(option){
        this.fuelLevel=option.fuelLevel || 1000;
    
    }
    
    refuel(){
        
    }
    
    getFuel(){
    
        return this.fuelLevel;
    }
    move(){
        
    }
}


class Helicopter extends  Vehicle{
     refuel(){
         console.log("-Refuel");
         this.fuelLevel=this.fuelLevel+500;
    }
}


let helicopter=new Helicopter({fuelLevel:2000});

 helicopter.refuel();

 console.log(helicopter.getFuel());
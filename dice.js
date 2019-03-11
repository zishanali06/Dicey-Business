class Dice {
    constructor(value){
        this.roll();
        this.newdiv = $('<div class="dice block"></div>');
        this.newdiv.append(this.value);
        $('.diceboard').append(this.newdiv);
    }

    roll() {
        this.value = randomNum()
    }
};

let randomNum = () => Math.floor(Math.random() * 6) + 1; 

$('#generate').click(function(){
    let newdie = new Dice();
})

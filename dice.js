// $(document).ready(function () {
//     let rollbutton = $('<button class="btn btn-primary mt-3 ml-3" id="rolldice">Roll Dice</button>')
//     $('.buttonrow').append(rollbutton);
// })

class Dice {
    constructor(value) {
        this.roll();
        this.newdiv = $('<div class="dice block"></div>');
        this.newdiv.append(this.value);
        $('.diceboard').append(this.newdiv);
    }

    roll() {
        this.value = randomNum();
    }
};

let randomNum = () => Math.floor(Math.random() * 6) + 1;

$('#generate').click( () => {
    let newdie = new Dice();
})

$('#rolldice').click( () => {
    // console.log(alldice);
    $('.dice').each(function(e){
        e.roll();
        e.newdiv.append(this.value);
    });
})




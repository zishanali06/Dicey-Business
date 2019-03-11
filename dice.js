// $(document).ready(function () {
//     let rollbutton = $('<button class="btn btn-primary mt-3 ml-3" id="rolldice">Roll Dice</button>')
//     $('.buttonrow').append(rollbutton);
// })
let diecount = 0;
let diearray = [];

class Dice {
    constructor(diecount) {
        this.newdiv = $('<div class="dice block"></div>');
        this.roll();
        this.diecount = diecount;
        $('.diceboard').append(this.newdiv);
    }

    roll() {
        this.value = randomNum();
        this.newdiv.empty();
        this.newdiv.append(this.value);
    }
};

let randomNum = () => Math.floor(Math.random() * 6) + 1;

$('#generate').click(() => {
    let newdie = new Dice(diecount);
    diecount++;
    diearray.push(newdie);
    console.log(diearray);
})

$('#rolldice').click(() => {
    let resetdiecount = 0;
    while (resetdiecount < diearray.length) {
        let thisdie = diearray.pop();
        thisdie.roll();
        diearray.unshift(thisdie);
        console.log(diearray);
        resetdiecount++;
    };
})




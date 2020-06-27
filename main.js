let button = document.querySelectorAll('.btn')

let turn = 1;
let click = 0;

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');

let reload = document.getElementById('reload')
reload.addEventListener('click', () => {
    for (btn of button) {
        btn.innerText = '';
    }
    document.getElementById('gameInfo').innerHTML = '<br><br>';
    turn = 1;
    click = 0;
});

function clear(){
    setTimeout(() => {
        for (btn of button) {
            btn.innerText = '';
        }
        document.getElementById('gameInfo').innerHTML = '<br><br>';
        turn = 1;
        click = 0;
    }, 2500);
}

button.forEach(btn => {
    btn.addEventListener('click', function type(x) {
        let btnTxt = x.target.innerText;
        // console.log(btnTxt)

        if (btnTxt == '') {
            if (turn == 1) {
                if(click == 8) {
                    document.getElementById('gameInfo').innerHTML = '<br><p>OOPS! Game Over.</p>'
                }
                btn.innerText = 'O';
                turn = 2;
                click++
            } else {
                btn.innerText = 'X';
                turn = 1;
                click++
            }
            
            if(one.innerText == 'O' && two.innerText == 'O' && three.innerText == 'O' || one.innerText == 'O' && five.innerText == 'O' && nine.innerText == 'O' || three.innerText == 'O' && five.innerText == 'O' && seven.innerText == 'O' || four.innerText == 'O' && five.innerText == 'O' && six.innerText == 'O' || seven.innerText == 'O' && eight.innerText == 'O' && nine.innerText == 'O' || one.innerText == 'O' && four.innerText == 'O' && seven.innerText == 'O' || two.innerText == 'O' && five.innerText == 'O' && eight.innerText == 'O' || three.innerText == 'O' && six.innerText == 'O' && nine.innerText == 'O') {
                document.getElementById('gameInfo').innerHTML = '<br><p>Wow! Player 1 makes A match, Player 1 Wins.</p>';
                clear()
            } 
            if(one.innerText == 'X' && two.innerText == 'X' && three.innerText == 'X' || one.innerText == 'X' && five.innerText == 'X' && nine.innerText == 'X' || three.innerText == 'X' && five.innerText == 'X' && seven.innerText == 'X' || four.innerText == 'X' && five.innerText == 'X' && six.innerText == 'X' || seven.innerText == 'X' && eight.innerText == 'X' && nine.innerText == 'X' || one.innerText == 'X' && four.innerText == 'X' && seven.innerText == 'X' || two.innerText == 'X' && five.innerText == 'X' && eight.innerText == 'X' || three.innerText == 'X' && six.innerText == 'X' && nine.innerText == 'X') {
                document.getElementById('gameInfo').innerHTML = '<br><p>Wow! Player 2 makes A match, Player 2 Wins.</p>';
                clear()
            } 
        } else {
            alert('Already Clicked.')
        }
    });
});
const board = document.querySelector('.board')
let score = 0


for (let i = 0; i < 100; i++) {

    const cell = document.createElement('div')
    cell.classList.add("cell")
    board.appendChild(cell)
}

const ship = [10, 13, 35, 46, 50, 55, 78]
const cells = document.querySelectorAll('.cell')


cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {

        if (cell.classList.contains('clicked')) return;
        cell.classList.add('clicked');


        if (ship.includes(index)) {
            cell.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
            score++
             document.querySelector('#score').textContent = score
        }

        if (score === ship.length) {
            setTimeout(() => {
                alert('You win!');
            }, 100);

        } else {
            cell.style.backgroundColor = 'green';
        }
    })
})
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

//   Crie um calendário dinamicamente.
//   O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
//   Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
//   A tag <ul> deve conter o id 'days';
//   Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
//   Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
//   Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

function daysOfMonth() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ulElement = document.getElementById('days');
    for (let i = 0; i < decemberDaysList.length; i += 1) {
        let liElement = document.createElement('li')
        liElement.className = 'day';
        liElement.innerText = decemberDaysList[i];
        ulElement.appendChild(liElement);


    }
}

daysOfMonth();

function holidayFriday() {
    const listDays = document.querySelectorAll('.day');
    console.log(listDays);
    for (let i = 0; i < listDays.length; i += 1) {
        if (listDays[i].innerText == 24 ||
            listDays[i].innerText == 25 ||
            listDays[i].innerText == 31) {
            listDays[i].classList.add('holiday')
        }
        if (listDays[i].innerText == 4 ||
            listDays[i].innerText == 11 ||
            listDays[i].innerText == 18 ||
            listDays[i].innerText == 25) {
            listDays[i].classList.add('friday')
        }
    }
}

holidayFriday();

// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function holidays(element) {

    const buttonHoliday = document.createElement('button');
    buttonHoliday.id = 'btn-holiday';
    buttonHoliday.innerHTML = element
    const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
    buttonsContainer.appendChild(buttonHoliday);

}

holidays('Feriados');

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

const button2 = document.getElementById('btn-holiday');

function changeColorHolidays() {
    const holidays = document.querySelectorAll(".holiday");
    for (let i = 0; i < holidays.length; i += 1) {
        if (holidays[i].style.backgroundColor !== 'green') {
            holidays[i].style.backgroundColor = 'green';
        } else {
            holidays[i].style.backgroundColor = 'rgb(238,238,238)';
        }

    }
}


button2.addEventListener('click', changeColorHolidays);


// function returnColorHolidays(){
//     const holidays = document.querySelectorAll(".holiday");
//     for(let i = 0; i < holidays.length; i += 1){
//         holidays[i].style.backgroundColor = 'rgb(238,238,238)'
//     }
// }

// button2.addEventListener('click', returnColorHolidays);







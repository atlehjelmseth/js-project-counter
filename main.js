// // buttons and counter text
// const counter = document.querySelector('#counter')
// const btns = document.querySelectorAll('.btn')

// // initialize the count variable
// let count = -65

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const styles = e.currentTarget.classList
//     const decButton = document.querySelector('.decrease')

//     if (styles.contains('increase')) {
//       count++

//       if (decButton.disabled) decButton.disabled = false

//       counter.classList.add('up')

//       setTimeout(() => {
//         counter.classList.remove('up')
//       }, 500)
//     } else if (styles.contains('decrease')) {
//       count--

//       if (count < -65) decButton.disabled = true

//       counter.classList.add('down')

//       setTimeout(() => {
//         counter.classList.remove('down')
//       }, 500)
//     } else {
//       if (decButton.disabled) decButton.disabled = false

//       count = -65
//     }

//     if (count > 0)
//       counter.style.color = 'darkgreen'

//     if (count < 0)
//       counter.style.color = 'red'

//       if (count === 0)
//       counter.style.color = 'lightgreen'

//     if (count === -10 || count === -9 || count === -8 || count === -7 || count === -6 || count === -5 || count === -4 || count === -3 || count === -2 || count === -1)
//       counter.style.color = 'orange'

//     counter.textContent = count
//   })
// })

// function clearout {
//   localStorage.clear()
// }



// example {id:1592304983049, title: 'Deadpool', year: 2015}
// const salesGoal = (ev)=>{
//     ev.preventDefault();  //to stop the form submitting
//     let sale = {

//         sales: document.getElementById('goal').value
//     }
//     sales.push(sale);
//     // document.forms[0].reset(); // to clear the form for the next entries
//     document.querySelector('form').reset();


//     //for display purposes only
//     // console.warn('added' , {sales} );
//     // let pre = document.querySelector('#msg pre');
//     // pre.textContent = '\n' + JSON.stringify(sales, '\t', 2);

//     //saving to localStorage
//     localStorage.setItem('salesGoalLocal', JSON.stringify(sales) );

//     let todaysGoal = document.querySelector('.todaysgoal')
//     let goalHtml = localStorage.getItem('salesGoalLocal');
//     // clearout()
//     todaysGoal.innerHTML += goalHtml;
// }


// document.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('btn').addEventListener('click', salesGoal);
// });

let todaysGoal = document.getElementById("goal");
let goalHtml = document.getElementById("todaysgoal");
const add = document.getElementById("btn");


add.onclick = function (ev) {
  ev.preventDefault()
  const goal = todaysGoal.value;
  
  localStorage.setItem('salesGoalLocal', JSON.stringify(goal))

  let goalString = localStorage.getItem('salesGoalLocal');
  let goalFinal = JSON.parse(goalString);
  goalHtml.innerHTML = '';
  goalHtml.innerHTML += goalFinal;
  console.log(goalFinal);
}


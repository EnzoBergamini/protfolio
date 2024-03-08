const birthDate = new Date('2001-05-02');
const currentDate = new Date();

const ctx = document.getElementById('age-chart');

const age = [];
const anniversaryDates = [];
let i = 0;

for (let year = birthDate.getFullYear(); year <= currentDate.getFullYear(); year++) {
    age.push(i);
    anniversaryDates.push(new Date(year, birthDate.getMonth(), birthDate.getDate()).toLocaleDateString());
    i++;
}

console.log(age);


const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: anniversaryDates,
        datasets: [{
            label: 'my age',
            data: age,
            borderColor: '#2391CF',
            borderWidth: 3,
            fill: false
        }]
    },
    options: {
        animation,
        interaction: {
            intersect: false
        },
        plugins: {
            legend: false
        },
        scales: {
            x: {
                type: 'linear'
            }
        }
    }
});
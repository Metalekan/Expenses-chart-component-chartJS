const data = {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [{
        label: '$ USD',
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: [
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(186, 34%, 60%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)'
        ],
        borderColor: [
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(186, 34%, 60%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)'
        ],
        borderWidth: 1
    }]
};

// config 
const config = {
type: 'bar',
data,
options: {
    scales: {
    y: {
        beginAtZero: true
    }
    }
}
};

// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

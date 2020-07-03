  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
          labels: ['JavaScript', 'Vue.js','ReactJS', 'NodeJS', 'FeathersJS','MongoDB', 'Mocha', 'Jest', 'GitHub', 'jQuery', 'MySQL'],
          datasets: [{
              data: [8, 8, 4, 7, 7, 9, 5, 6, 10, 6, 6],
              barThickness: 20,
              fillOpacity: 1,
              backgroundColor: [
                'rgba(189, 195, 199, 0.5)',
                'rgba(189, 195, 199, 0.5)',
                'rgba(189, 195, 199, 0.5)',
                'rgba(189, 195, 199, 0.5)',
                'rgba(189, 195, 199, 0.5)',
                'rgba(189, 195, 199, 0.5)',
                'rgba(189, 195, 199, 0.5)',
                'rgba(189, 195, 199, 0.5)',
                'rgba(189, 195, 199, 0.5)',
                'rgba(189, 195, 199, 0.5)',
                'rgba(189, 195, 199, 0.5)'
              ],
              borderColor: [
                'rgba(46, 49, 49, 1)',
                'rgba(46, 49, 49, 1)',
                'rgba(46, 49, 49, 1)',
                'rgba(46, 49, 49, 1)',
                'rgba(46, 49, 49, 1)',
                'rgba(46, 49, 49, 1)',
                'rgba(46, 49, 49, 1)',
                'rgba(46, 49, 49, 1)',
                'rgba(46, 49, 49, 1)',
                'rgba(46, 49, 49, 1)',
                'rgba(46, 49, 49, 1)'
                  
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {
          display: false
        },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }],
              xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
          }
      }
  });
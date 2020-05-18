google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Working hours', 16],
        ['Elerctricity consumption', 10],
        ['Saved energy', 2],
    ]);

    var options = {
        title: 'Monthly saved energy'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
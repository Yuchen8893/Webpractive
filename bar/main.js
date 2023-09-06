let myGraph = document.getElementById('myGraph');

let trace0 = {};
trace0.type = "bar";
trace0.name = "Lion";
trace0.x = [];
trace0.y = [];
trace0.x[0] = "Taipei Zoo";
trace0.y[0] = animals_0[0]['count']; trace0.x[1] = "Tainan Zoo";
trace0.y[1] = animals_1[0]['count'];
trace0.text = trace0.y;
trace0.textfont = { color: 'yellow', size: 20 };


let trace1 = {};
trace1.type = "bar";
trace1.name = "tiger";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "Taipei Zoo";
trace1.y[0] = animals_0[1]['count'];
trace1.x[1] = "Tainan Zoo";
trace1.y[1] = animals_1[1]['count'];
trace1.text = trace1.y;
trace1.textfont = { color: 'yellow', size: 20 };


let trace2 = {};
trace2.type = "bar";
trace2.name = "monkey";
trace2.x = [];
trace2.y = [];
trace2.x[0] = "Taipei Zoo";
trace2.y[0] = animals_0[2]['count'];
trace2.x[1] = "Tainan Zoo";
trace2.y[1] = animals_1[2]['count'];
trace2.text = trace2.y;
trace2.textfont = { color: 'yellow', size: 20 };



let data = [];
data.push(trace0, trace1, trace2);

let layout = {
    barmode: 'stack'
}
Plotly.newPlot(myGraph, data, layout);
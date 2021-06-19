showData(data);
var filtered = data;

function showData(data) {
    d3.select('tbody').html('');
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>{
            row.append('td').text(val);
        });
    });  
};

d3.select('button').on('click',handleClick);

function handleClick() {
    filtered = data;
    showData(filtered);
};

d3.selectAll('input').on('change',handleChange);

function handleChange() {
    var key = d3.select(this).node().id;
    var value = d3.select(this).node().value;
    if(value){
        filtered = filtered.filter(obj=>obj[key] == value);
        showData(filtered);
    };
};
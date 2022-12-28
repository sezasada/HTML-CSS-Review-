console.log('hello');

$(function () {
    console.log('js working');
    appendDom(); 
    $('#submitButton').on("click", decFunction);
});

const stock = [];

function addToCollection (peRatio, revenue, guidance, chart) {
    const newObject = {
        peRatio: peRatio,
        revenue: revenue,
        guidance: guidance,
        chart: chart
    }
    stock.push(newObject);
    return true;
}
console.log(stock);
console.log(addToCollection('30', '34', 'do this', 'chart'));

function appendDom () {
    $("#tableBody").empty();
    for( let i = 0; i < stock.length; i++) {
        const element = stock[i];

        $("#tableBody").append(`<tr>
          <td>${element.peRatio}</td>
          <td>${element.revenue}</td>
          <td>${element.guidance}</td>
          <td>${element.chart}</td>
        </tr>`);
    }
}

function decFunction (){
    let a = $("#peRatio").val();
    let b = $("#revenue").val();
    let c = $("#guidance").val();
    let d = $("#chart").val();

    addToCollection(a, b, c, d);

    $('#peRatio'). val('');
    $('#revenue'). val('');
    $('#guidance'). val('');
    $('#chart'). val('');

 appendDom();

}

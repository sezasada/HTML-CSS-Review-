$(document).ready(function() {
  $('#submit-button').on('click', function() {
    // Get the company name from the input field
    let company = $('#company-name').val();

    $.ajax({
      method: 'GET',
      url: `/displayrev/${company}`,
      success: function(data) {
        let revenue = data.revenue;
        let peRatio = data.peRatio;
        let guidance = data.guidance;

        let row = $('<tr>');

        let companyCell = $('<td>').text(company);
        row.append(companyCell);
    
        let revenueCell = $('<td>').text('$' + revenue);
        row.append(revenueCell);
    
        let peRatioCell = $('<td>').text(peRatio);
        row.append(peRatioCell);
    
        let guidanceCell = $('<td>').text(guidance);
        row.append(guidanceCell);
    
        $('#revenue-table').append(row);
      }
    });
  });
});
$(document).ready(function() {
  $('#button').on('click', function() {
    $.ajax({
      method: 'GET',
      url: '/displayrev',
      success: function(data) {
        let revenue = data.revenue;
        let peRatio = data.peRatio;
    
        let row = $('<tr>');
        
        let companyCell = $('<td>').text('Apple');
        row.append(companyCell);
    
        let revenueCell = $('<td>').text('$' + revenue);
        row.append(revenueCell);
    
        let peRatioCell = $('<td>').text(peRatio);
        row.append(peRatioCell);
    
        let guidanceCell = $('<td>').text("This quarters results reflect Apples commitment to our customers, to the pursuit of innovation, and to leaving the world better than we found it. As we head into the holiday season with our most powerful lineup ever, we are leading with our values in every action we take and every decision we make. We are deeply committed to protecting the environment, to securing user privacy, to strengthening accessibility, and to creating products and services that can unlock humanitys full creative potential. Our record September quarter results continue to demonstrate our ability to execute effectively in spite of a challenging and volatile macroeconomic backdrop. We continued to invest in our longterm growth plans, generated over $24 billion in operating cash flow, and returned over $29 billion to our shareholders during the quarter. The strength of our ecosystem, unmatched customer loyalty, and record sales spurred our active installed base of devices to a new all-time high. This quarter capped another record-breaking year for Apple, with revenue growing over $28 billion and operating cash flow up $18 billion versus last year.");
        row.append(guidanceCell);

        $('#revenue-table').append(row);

      }
    });
  });
});
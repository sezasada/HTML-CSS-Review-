console.log('hello');



function displayRevenue() {
    // Placeholder value for revenue
    let revenue = '90.15B';
    let peRatio = 21.5358;
  
    // Create a new table row
    let row = document.createElement("tr");
  
    // Create the first cell for the company name
    let companyCell = document.createElement("td");
    companyCell.innerHTML = "Apple";
    row.appendChild(companyCell);
  
    // Create the second cell for the revenue
    let revenueCell = document.createElement("td");
    revenueCell.innerHTML = "$" + revenue;
    row.appendChild(revenueCell);

    let peRatioCell = document.createElement("td");
    peRatioCell.innerHTML = peRatio;
    row.appendChild(peRatioCell);

    let guidanceCell = document.createElement("td");
    guidanceCell.innerHTML = "This quarter’s results reflect Apple’s commitment to our customers, to the pursuit of innovation, and to leaving the world better than we found it. As we head into the holiday season with our most powerful lineup ever, we are leading with our values in every action we take and every decision we make. We are deeply committed to protecting the environment, to securing user privacy, to strengthening accessibility, and to creating products and services that can unlock humanity’s full creative potential. Our record September quarter results continue to demonstrate our ability to execute effectively in spite of a challenging and volatile macroeconomic backdrop. We continued to invest in our long-term growth plans, generated over $24 billion in operating cash flow, and returned over $29 billion to our shareholders during the quarter. The strength of our ecosystem, unmatched customer loyalty, and record sales spurred our active installed base of devices to a new all-time high. This quarter capped another record-breaking year for Apple, with revenue growing over $28 billion and operating cash flow up $18 billion versus last year.";
    row.appendChild(guidanceCell);
  
    // Add the new row to the table
    let table = document.getElementById("revenue-table");
    table.appendChild(row);
  }
  
  // Attach the displayRevenue function to the button's click event
  let button = document.getElementById("button");
  button.addEventListener("click", displayRevenue);
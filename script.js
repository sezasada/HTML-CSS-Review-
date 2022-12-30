console.log('hello');



function displayRevenue() {
    // Placeholder value for revenue
    let revenue = 1000;
    let peRatio = 1.3;
  
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
    guidanceCell.innerHTML = "This is what we have to do jkh fa hja hjhasjfhdjsahfhsa fhsadh fkjsadhjkfh sadkj";
    row.appendChild(guidanceCell);
  
    // Add the new row to the table
    let table = document.getElementById("revenue-table");
    table.appendChild(row);
  }
  
  // Attach the displayRevenue function to the button's click event
  let button = document.getElementById("button");
  button.addEventListener("click", displayRevenue);
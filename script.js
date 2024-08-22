function withdrawCash() {
    var name = document.getElementById('nameInput').value;
    var amount = document.getElementById('amountInput').value;
  
    if (!name || !amount) {
      alert("Please enter both name and amount.");
      return;
    }
  
    var tableBody = document.getElementById('tableBody');
  
    var newRow = tableBody.insertRow();
    var nameCell = newRow.insertCell(0);
    var amountCell = newRow.insertCell(1);
  
    nameCell.innerHTML = name;
    amountCell.innerHTML = amount;
  
    document.getElementById('nameInput').value = '';
    document.getElementById('amountInput').value = '';
  }
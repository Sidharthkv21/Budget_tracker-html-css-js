document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    // Create table row
    const row = document.createElement('tr');

    // Create table cells
    const typeCell = document.createElement('td');
    typeCell.innerText = type;
    row.appendChild(typeCell);

    const nameCell = document.createElement('td');
    nameCell.innerText = name;
    row.appendChild(nameCell);

    const amountCell = document.createElement('td');
    amountCell.innerText = `$${amount}`;
    row.appendChild(amountCell);

    const deleteCell = document.createElement('td');
    const deleteBtn = document.createElement('span');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    // Append row to table
    document.getElementById('transaction-list').appendChild(row);

    // Clear form
    document.getElementById('transaction-form').reset();
});

document.getElementById('transaction-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.parentElement.remove();
    }
});








document.addEventListener('DOMContentLoaded', function () {
    // Load and parse YAML data
    fetch('data.yml')
        .then(response => response.text())
        .then(yamlData => {
            const jsonData = YAML.parse(yamlData);
            displayData(jsonData);
        })
        .catch(error => console.error('Error loading YAML data:', error));
});

function displayData(data) {
    const dataTable = document.getElementById('dataTable');
    renderTable(dataTable, data);
}

function renderTable(table, data) {
    // Clear existing table rows
    table.innerHTML = '';

    // Create header row
    const headerRow = table.insertRow(0);
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });

    // Create data rows
    data.forEach(item => {
        const row = table.insertRow();
        Object.values(item).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

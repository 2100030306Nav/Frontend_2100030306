document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#data-table tbody');
    const filterInput = document.getElementById('filter');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');

    let data = [];
    let currentPage = 1;
    const rowsPerPage = 5;

    function fetchData() {
        return [
            { productName: 'Laptop', price: 999, category: 'Electronics', quantity: 10 },
            { productName: 'Smartphone', price: 699, category: 'Electronics', quantity: 15 },
            { productName: 'Headphones', price: 99, category: 'Electronics', quantity: 20 },
            { productName: 'Book', price: 20, category: 'Stationery', quantity: 50 },
            { productName: 'Backpack', price: 50, category: 'Bags', quantity: 30 },
            { productName: 'T-shirt', price: 25, category: 'Clothing', quantity: 40 },
            { productName: 'Watch', price: 150, category: 'Accessories', quantity: 25 },
            { productName: 'Shoes', price: 80, category: 'Footwear', quantity: 35 },
            { productName: 'Sunglasses', price: 70, category: 'Accessories', quantity: 20 },
            { productName: 'Mouse', price: 30, category: 'Electronics', quantity: 25 },
            { productName: 'Notebook', price: 10, category: 'Stationery', quantity: 60 },
            { productName: 'Water Bottle', price: 15, category: 'Accessories', quantity: 40 }
        ];
    }

    function loadTableData(data) {
        tableBody.innerHTML = '';
        data.forEach(row => {
            const tr = document.createElement('tr');
            Object.values(row).forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    }

    function filterData(query) {
        return data.filter(row => 
            Object.values(row).some(
                cell => cell.toString().toLowerCase().includes(query.toLowerCase())
            )
        );
    }

    function paginateData(data, page, rowsPerPage) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return data.slice(start, end);
    }

    function updateTable() {
        const filteredData = filterData(filterInput.value);
        const paginatedData = paginateData(filteredData, currentPage, rowsPerPage);
        loadTableData(paginatedData);
        pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredData.length / rowsPerPage)}`;
    }

    filterInput.addEventListener('input', () => {
        currentPage = 1;
        updateTable();
    });

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateTable();
        }
    });

    nextPageButton.addEventListener('click', () => {
        const filteredData = filterData(filterInput.value);
        if (currentPage * rowsPerPage < filteredData.length) {
            currentPage++;
            updateTable();
        }
    });

    data = fetchData();
    updateTable();
});

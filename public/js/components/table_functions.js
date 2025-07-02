// table-functions.js
// Live table filtering functionality that works with dynamic data

// Global variables for filtering functionality
let filterInputs, table, tbody;

// Initialize the table functionality
export function initializeTable() {
  filterInputs = document.querySelectorAll(".filter-input");
  table = document.getElementById("workflowTable");
  tbody = table.querySelector("tbody");

  // Add event listeners to all filter inputs
  filterInputs.forEach((input) => {
    // Prevent form submission on Enter key
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
  });

  // Add Sort button functionality
  const sortBtn = document.getElementById("sortBtn");
  if (sortBtn) {
    sortBtn.addEventListener("click", function () {
      filterTable();
    });
  }

  // Add Reset button functionality
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      resetTable();
    });
  }

  // CSV Download functionality
  const downloadBtn = document.getElementById("downloadCsvBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      downloadVisibleRowsAsCSV();
    });
  }
}

// Function to get current rows (works with dynamically loaded data)
function getCurrentRows() {
  return Array.from(tbody.querySelectorAll("tr"));
}

// Function to reset table filters and show all rows
function resetTable() {
  // Clear all filter inputs
  filterInputs.forEach((input) => {
    input.value = "";
  });

  // Show all rows
  const rows = getCurrentRows();
  rows.forEach((row) => {
    row.style.display = "";
  });

  // Update row numbers
  updateRowNumbers();
}

// Function to filter table rows
function filterTable() {
  const filters = {};
  const rows = getCurrentRows();

  // Get all current filter values
  filterInputs.forEach((input) => {
    const column = input.getAttribute("data-column");
    const value = input.value.toLowerCase().trim();
    if (value) {
      filters[column] = value;
    }
  });

  // Show/hide rows based on filters
  rows.forEach((row) => {
    let showRow = true;

    // Check each filter
    for (const [column, filterValue] of Object.entries(filters)) {
      const cell = row.querySelector(`[data-column="${column}"]`);
      if (cell) {
        const cellValue = cell.textContent.toLowerCase();
        if (!cellValue.includes(filterValue)) {
          showRow = false;
          break;
        }
      }
    }

    // Show or hide the row
    row.style.display = showRow ? "" : "none";
  });

  // Update row numbers for visible rows
  updateRowNumbers();
}

// Function to update row numbers
function updateRowNumbers() {
  const rows = getCurrentRows();
  const visibleRows = rows.filter((row) => row.style.display !== "none");
  visibleRows.forEach((row, index) => {
    const numberCell = row.querySelector('th[scope="row"]');
    if (numberCell) {
      numberCell.textContent = index + 1;
    }
  });
}

// Function to download visible rows as CSV
function downloadVisibleRowsAsCSV() {
  const table = document.getElementById("workflowTable");
  const headers = Array.from(table.querySelectorAll("thead th")).map((th) =>
    th.textContent.trim()
  );
  const rows = getCurrentRows();
  const visibleRows = rows.filter((row) => row.style.display !== "none");

  // Create CSV content
  let csvContent = "";

  // Add headers
  csvContent += headers.map((header) => `"${header}"`).join(",") + "\n";

  // Add visible data rows
  visibleRows.forEach((row) => {
    const cells = Array.from(row.querySelectorAll("th, td"));
    const rowData = cells.map((cell) => {
      // Clean and escape cell content
      let content = cell.textContent.trim();
      // Escape quotes by doubling them
      content = content.replace(/"/g, '""');
      return `"${content}"`;
    });
    csvContent += rowData.join(",") + "\n";
  });

  // Create and trigger download
  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });
  const link = document.createElement("a");

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);

    // Generate filename with timestamp
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace(/:/g, "-");
    const filename = `cms_workflow_data_${timestamp}.csv`;

    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL object
    URL.revokeObjectURL(url);
  }
}

// Function to call after data is loaded
export function initializeTableFeatures() {
  // Update row numbers for initial load
  updateRowNumbers();

  // Apply any existing filters
  filterTable();
}

// Export functions for external use
export { filterTable, updateRowNumbers, resetTable };

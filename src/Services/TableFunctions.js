// This Service module contains important functions for the Workflows table
// table-functions.js
// Live table filtering functionality that works with dynamic data

// Global variables for filtering functionality
let filterInputs, table, tbody;
let eventListenersAdded = false; // Track if event listeners are already added

// Function to get current rows (works with dynamically loaded data)
function getCurrentRows() {
  if (!tbody) {
    const table = document.getElementById("workflowTable");
    if (table) {
      tbody = table.querySelector("tbody");
    }
  }
  
  if (!tbody) {
    console.warn("Table body not found");
    return [];
  }
  
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
      let cellValue = '';
      
      // First try to find a cell with data-column attribute
      const cell = row.querySelector(`[data-column="${column}"]`);
      if (cell) {
        cellValue = cell.textContent.toLowerCase();
      } else {
        // If no cell found, try to get data attribute from the row
        const dataAttr = row.getAttribute(`data-${column}`);
        if (dataAttr) {
          cellValue = dataAttr.toLowerCase();
        }
      }
      
      if (cellValue && !cellValue.includes(filterValue)) {
        showRow = false;
        break;
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
  try {
    const table = document.getElementById("workflowTable");
    if (!table) {
      console.warn("Workflow table not found");
      return;
    }

    const headers = Array.from(table.querySelectorAll("thead th")).map((th) =>
      th.textContent.trim()
    );
    const rows = getCurrentRows();
    const visibleRows = rows.filter((row) => row.style.display !== "none");

    if (visibleRows.length === 0) {
      console.warn("No visible rows to download");
      return;
    }

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

      console.log(`CSV download initiated: ${filename}`);
    }
  } catch (error) {
    console.error("Error downloading CSV:", error);
  }
}

// Function to call after data is loaded
export function initializeTableFeatures() {
  // Initialize table elements
  filterInputs = document.querySelectorAll(".filter-input");
  table = document.getElementById("workflowTable");
  tbody = table ? table.querySelector("tbody") : null;

  if (!tbody) {
    console.warn("Table body not found during initialization");
    return;
  }

  // Only add event listeners once
  if (!eventListenersAdded) {
    // Add event listeners to all filter inputs
    filterInputs.forEach((input) => {
      // Trigger filter on Enter key
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          filterTable();
        }
      });

      // Trigger filter on input change (real-time filtering)
      input.addEventListener("input", function () {
        filterTable();
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

    eventListenersAdded = true;
  }

  // Update row numbers for initial load
  updateRowNumbers();

  // Apply any existing filters
  filterTable();
}

// Sorting function for workflow data
export const sortWorkflows = (workflows, key, direction) => {
    if (!key || !workflows) return workflows;

    return [...workflows].sort((a, b) => {
        let aValue = a[key];
        let bValue = b[key];

        // Handle numeric values
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return direction === 'asc' ? aValue - bValue : bValue - aValue;
        }

        // Handle string values
        aValue = String(aValue || '').toLowerCase();
        bValue = String(bValue || '').toLowerCase();

        if (aValue < bValue) return direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return direction === 'asc' ? 1 : -1;
        return 0;
    });
};

// Function to reset event listeners flag (useful for testing or component unmounting)
export function resetEventListeners() {
  eventListenersAdded = false;
}

// Export functions for external use
export { filterTable, updateRowNumbers, resetTable };
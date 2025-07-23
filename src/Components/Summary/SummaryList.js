const SummaryList = ({ summaryData = [], aggregationField = 'workflow' }) => {
    console.log("Executing SummaryList function");
    console.log("summaryData:", summaryData);
    console.log("aggregationField:", aggregationField);

    // Check if summaryData is an array, if not, convert or provide fallback
    const dataArray = Array.isArray(summaryData) ? summaryData : [];
    
    // Debug: Log the first summary object to see its structure
    if (dataArray.length > 0) {
        console.log("First summary object:", dataArray[0]);
        console.log("Available keys:", Object.keys(dataArray[0]));
    }

    return (
        <tbody id="summaryTableBody">
            {dataArray.map((summary, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td data-column={aggregationField}>
                        {summary.groupValue}
                    </td>
                    <td data-column="count">
                        {summary.count}
                    </td>
                    <td data-column="created">
                        {summary.jobs_created || 0}
                    </td>
                    <td data-column="pending">
                        {summary.jobs_pending || 0}
                    </td>
                    <td data-column="running">
                        {summary.jobs_running || 0}
                    </td>
                    <td data-column="success">
                        {summary.jobs_success || 0}
                    </td>
                    <td data-column="failure">
                        {summary.jobs_failed || 0}
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default SummaryList; 
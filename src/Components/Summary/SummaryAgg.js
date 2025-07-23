import { useState } from "react";
import "./SummaryAgg.css";

export default function SummaryAgg({ onAggregationChange, selectedAggregation = 'campaign' }) {
    const [localSelectedAggregation, setLocalSelectedAggregation] = useState(selectedAggregation);

    const aggregationOptions = [
        { key: 'campaign', label: 'Campaign', icon: 'bi-tag-fill' },
        { key: 'cmssw', label: 'CMSSW', icon: 'bi-code-slash' },
        { key: 'type', label: 'Type', icon: 'bi-gear-fill' },
        { key: 'status', label: 'Status', icon: 'bi-check-circle-fill' },
        { key: 'teamname', label: 'Team Name', icon: 'bi-people-fill' }
    ];

    const handleAggregationChange = (aggregationKey) => {
        setLocalSelectedAggregation(aggregationKey);
        onAggregationChange(aggregationKey);
    };

    return (
        <section>
            <div className="container-fluid summary-form-wrapper">
                <div className="summary-form-card">
                    <div className="summary-form-header">
                        <h3 className="summary-form-title">
                            <i className="bi bi-bar-chart-fill me-2"></i>
                            Summary Aggregation
                        </h3>
                        <p className="summary-form-description">
                            Select a grouping option below to view aggregated statistics. The table will show summary data grouped by your selection.
                        </p>
                    </div>

                    <div className="summary-form-content">
                        <div className="aggregation-buttons">
                            {aggregationOptions.map((option) => (
                                <button
                                    key={option.key}
                                    className={`aggregation-btn ${localSelectedAggregation === option.key ? 'active' : ''}`}
                                    onClick={() => handleAggregationChange(option.key)}
                                >
                                    <i className={`bi ${option.icon} me-2`}></i>
                                    {option.label}
                                </button>
                            ))}
                        </div>

                        <div className="summary-form-actions">
                            <button
                                type="button"
                                className="summary-btn summary-btn-success"
                                onClick={() => {/* TODO: Add CSV download functionality */}}
                            >
                                <i className="bi bi-download me-2"></i>
                                Download as CSV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
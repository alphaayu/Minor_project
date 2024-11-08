// frontend/src/ReportsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReportsPage() {
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        const fetchReports = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3000/api/reports/inventory');
                setReports(response.data);
            } catch {

            }
                
             finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    const downloadPDF = async () => {
        setDownloading(true);
        try {
            const response = await axios.get('http://localhost:3000/api/reports/inventory/pdf', {
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'inventory_report.pdf');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (err) {
            console.error('Error downloading PDF:', err);
            setError('Failed to download PDF.');
        } finally {
            setDownloading(false);
        }
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: '#1E1E2F',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{ 
                backgroundColor: '#2B2B40', 
                padding: '40px', 
                borderRadius: '10px', 
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', 
                textAlign: 'center',
                maxWidth: '500px',
                width: '100%'
            }}>
                <h1 style={{ 
                    color: '#fff', 
                    fontSize: '28px', 
                    marginBottom: '20px'
                }}>
                    Reports
                </h1>
                
                {loading && <p style={{ 
                    color: '#8888A5', 
                    fontSize: '18px'
                }}>
                    Loading reports...
                </p>}
                
                {error && <p style={{ 
                    color: '#FF6B6B', 
                    fontSize: '18px'
                }}>
                    {error}
                </p>}
                
                <ul style={{ 
                    listStyleType: 'none', 
                    padding: '0', 
                    margin: '0', 
                    textAlign: 'left',
                    fontSize: '18px',
                    color: '#EDEDED',
                    marginTop: '20px'
                }}>
                    {reports.map((report) => (
                        <li key={report.id} style={{ 
                            padding: '12px 0', 
                            borderBottom: '1px solid #3A3A4F',
                            transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#34344E'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                            {report.name}
                        </li>
                    ))}
                </ul>
                
                <button
                    onClick={downloadPDF}
                    style={{ 
                        backgroundColor: 'green', 
                        color: 'white', 
                        padding: '12px 30px', 
                        border: 'none', 
                        borderRadius: '8px', 
                        cursor: 'pointer', 
                        marginTop: '30px',
                        fontSize: '18px',
                        transition: 'background-color 0.3s ease, transform 0.3s ease'
                    }}
                    disabled={downloading}
                    aria-label="Download Inventory Report as PDF"
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#9C75E5';
                        e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'green';
                        e.target.style.transform = 'scale(1)';
                    }}
                >
                    {downloading ? 'Downloading...' : 'Download Inventory Report (PDF)'}
                </button>
            </div>
        </div>
        
       
        
    );
}

export default ReportsPage;

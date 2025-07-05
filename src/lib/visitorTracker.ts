
export interface VisitorData {
  id: string;
  ipAddress: string;
  timestamp: string;
  userAgent: string;
  page: string;
  referrer: string;
}

// Get visitor's IP address from a free API service
const getVisitorIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP:', error);
    return 'unknown';
  }
};

// Generate unique ID for each visit
const generateVisitId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

// Get current datetime in ISO format
const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};

// Save visitor data to localStorage (simulating JSON file storage)
const saveVisitorData = (visitorData: VisitorData): void => {
  try {
    const existingData = localStorage.getItem('visitor_logs');
    const visitors: VisitorData[] = existingData ? JSON.parse(existingData) : [];
    
    visitors.push(visitorData);
    
    localStorage.setItem('visitor_logs', JSON.stringify(visitors, null, 2));
    console.log('Visitor data saved:', visitorData);
  } catch (error) {
    console.error('Error saving visitor data:', error);
  }
};

// Main function to track visitor
export const trackVisitor = async (page: string = window.location.pathname): Promise<void> => {
  try {
    const ipAddress = await getVisitorIP();
    
    const visitorData: VisitorData = {
      id: generateVisitId(),
      ipAddress,
      timestamp: getCurrentTimestamp(),
      userAgent: navigator.userAgent,
      page,
      referrer: document.referrer || 'direct'
    };
    
    saveVisitorData(visitorData);
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};

// Function to get all visitor logs
export const getVisitorLogs = (): VisitorData[] => {
  try {
    const data = localStorage.getItem('visitor_logs');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading visitor logs:', error);
    return [];
  }
};

// Function to export visitor logs as downloadable JSON
export const exportVisitorLogs = (): void => {
  try {
    const logs = getVisitorLogs();
    const dataStr = JSON.stringify(logs, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `visitor-logs-${new Date().toISOString().split('T')[0]}.json`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error exporting visitor logs:', error);
  }
};

// Function to clear all visitor logs
export const clearVisitorLogs = (): void => {
  localStorage.removeItem('visitor_logs');
};

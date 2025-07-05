
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { getVisitorLogs, exportVisitorLogs, clearVisitorLogs, VisitorData } from '../lib/visitorTracker';

const VisitorLogsAdmin = () => {
  const [logs, setLogs] = useState<VisitorData[]>([]);

  const loadLogs = () => {
    setLogs(getVisitorLogs());
  };

  useEffect(() => {
    loadLogs();
  }, []);

  const handleExport = () => {
    exportVisitorLogs();
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all visitor logs?')) {
      clearVisitorLogs();
      setLogs([]);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Visitor Logs ({logs.length} visits)</CardTitle>
          <div className="flex gap-2">
            <Button onClick={loadLogs} variant="outline">
              Refresh
            </Button>
            <Button onClick={handleExport} variant="outline">
              Export JSON
            </Button>
            <Button onClick={handleClear} variant="destructive">
              Clear All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">ID</th>
                  <th className="border border-gray-300 p-2 text-left">IP Address</th>
                  <th className="border border-gray-300 p-2 text-left">Timestamp</th>
                  <th className="border border-gray-300 p-2 text-left">Page</th>
                  <th className="border border-gray-300 p-2 text-left">Referrer</th>
                  <th className="border border-gray-300 p-2 text-left">User Agent</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-2 text-xs">{log.id}</td>
                    <td className="border border-gray-300 p-2">{log.ipAddress}</td>
                    <td className="border border-gray-300 p-2 text-sm">
                      {new Date(log.timestamp).toLocaleString()}
                    </td>
                    <td className="border border-gray-300 p-2">{log.page}</td>
                    <td className="border border-gray-300 p-2 text-sm">{log.referrer}</td>
                    <td className="border border-gray-300 p-2 text-xs max-w-xs truncate">
                      {log.userAgent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {logs.length === 0 && (
              <p className="text-center py-8 text-gray-500">No visitor logs found</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitorLogsAdmin;

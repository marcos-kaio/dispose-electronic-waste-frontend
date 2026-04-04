import { useState, useEffect } from "react";
import DisposalEmptyState from "../components/DisposalEmptyState";

// Temporary test interface
interface DisposalRequest {
  id: string;
}

export default function DashboardPage() {
  const [requests, setRequests] = useState<DisposalRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Temporary test verification
  useEffect(() => {
    setTimeout(() => {
      setRequests([]);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col w-full h-full animate-in fade-in duration-500">
      {isLoading ? (
        <div className="flex justify-center items-center h-100">
          <p className="text-gray-500 animate-pulse">Carregando dados...</p>
        </div>
      ) : requests.length === 0 ? (
        <DisposalEmptyState />
      ) : (
        <div className="bg-white border rounded-lg shadow-sm p-6 text-center text-gray-500">
          Dashboards with length {requests.length}.
        </div>
      )}
    </div>
  );
}

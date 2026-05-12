import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InventoryAppContent from './components/inventory/InventoryAppContent';

function generateId() {
  if (crypto?.randomUUID) return crypto.randomUUID();
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

function getDefaultPartyPath() {
  const lastVisited = localStorage.getItem('lastVisitedParty');
  return `/${lastVisited || generateId()}`;
}

export default function App() {
  return (
    <Router>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/:partyId" element={<InventoryAppContent />} />
          <Route path="*" element={<Navigate to={getDefaultPartyPath()} replace />} />
        </Routes>
      </main>
    </Router>
  );
}

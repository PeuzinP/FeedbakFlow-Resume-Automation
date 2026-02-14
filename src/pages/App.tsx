import React, { useState } from 'react';
import { Dashboard } from '../components/Dashboard'; // Adjusted path: '../components' instead of './components'
import { Participants } from './Participants';
import '../index.css'; // Adjusted path: '../index.css' is correct for src/pages/App.tsx

function App() {
  const [view, setView] = useState<'dashboard' | 'participants'>('dashboard');
  const [candidateName, setCandidateName] = useState('');

  return (
    <div className="app-container">
      {view === 'dashboard' ? (
        <Dashboard 
          onViewAll={() => setView('participants')} 
          setGlobalName={setCandidateName} 
        />
      ) : (
        <Participants 
          onBack={() => setView('dashboard')} 
          currentName={candidateName}
        />
      )}
    </div>
  );
}

export default App;

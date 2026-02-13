import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard'; // '..' sai de 'pages' e entra em 'components'
import { Participants } from './Participants'; // './' olha na mesma pasta onde o App está
import '../index.css'; // '..' sai de 'pages' para achar o CSS na raiz da 'src'
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
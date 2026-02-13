import React from 'react';

interface ParticipantsProps {
  onBack: () => void;
  currentName: string;
}

export const Participants = ({ onBack, currentName }: ParticipantsProps) => {
  return (
    <div className="dashboard-grid">
      <header className="header-nav" style={{ gridColumn: '1/-1', marginBottom: '2rem' }}>
        <button onClick={onBack} className="btn-text">← Voltar ao Painel</button>
        <h2>Todos os Participantes</h2>
      </header>

      <main className="card full-width">
        <div className="participants-header">
          <h3>Candidato em Foco: <span style={{color: '#2563eb'}}>{currentName || "Nenhum nome digitado"}</span></h3>
        </div>
        
        <div className="participants-list" style={{ marginTop: '2rem' }}>
          <p>Aguardando novos currículos para exibição detalhada...</p>
        </div>
      </main>
    </div>
  );
};
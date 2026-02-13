import React from 'react';
import { FileUpload } from './FileUpload';
import { CandidateTable } from './CandidateTable';

// Definimos o que o Dashboard recebe do App.tsx
interface DashboardProps {
  onViewAll: () => void;
  setGlobalName: (name: string) => void;
}

export const Dashboard = ({ onViewAll, setGlobalName }: DashboardProps) => {
  return (
    <div className="dashboard-grid">
      <header className="header-main">
        <h1>FeedbackFlow</h1>
        <p className="subtitle">Gestão Inteligente de Processos Seletivos</p>
      </header>

      <aside className="card sidebar-upload">
        <h3 className="card-title">Novo Processo</h3>
        {/* Passamos a função de nome para o FileUpload */}
        <FileUpload setGlobalName={setGlobalName} />
        <button className="btn-primary">Iniciar Análise</button>
      </aside>

      <main className="card table-results">
        <div className="table-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3 className="card-title">Candidatos Recentes</h3>
          <button onClick={onViewAll} className="btn-text">Ver todos →</button>
        </div>
        <CandidateTable />
      </main>
    </div>
  );
};
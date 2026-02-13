
import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  setGlobalName: (name: string) => void;
}

export const FileUpload = ({ setGlobalName }: FileUploadProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="upload-wrapper">
      <div className="recruiter-fields">
        <div className="input-group">
          <label>Nome do Candidato</label>
          <input 
            type="text" 
            placeholder="Ex: Pedro Paulo" 
            className="form-input" 
            onChange={(e) => setGlobalName(e.target.value)} 
          />
        </div>
      </div>

      <div className="upload-container">
        <label htmlFor="file-upload" className="upload-area">
          <Upload size={32} className="icon-blue" />
          <p className="upload-text">
            {fileName ? `Arquivo: ${fileName}` : "Anexar PDF ou Imagem"}
          </p>
          <input 
            type="file" 
            id="file-upload" 
            accept=".pdf, .jpg, .jpeg, .png"
            style={{ display: 'none' }} 
            onChange={handleFileChange} 
          />
        </label>
      </div>
    </div>
  );
};

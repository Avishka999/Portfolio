import { ArrowUpRight, Download } from 'lucide-react';
import { useState } from 'react';

export function Button({ children, href, onClick, variant = 'primary', download, icon = <ArrowUpRight size={16} />, disabled = false }) {
  const className = `button button-${variant}`;
  if (href && !disabled) {
    return <a className={className} href={href} download={download}>{children}{icon}</a>;
  }
  return <button className={className} onClick={onClick} disabled={disabled}>{children}{icon}</button>;
}

export function DownloadButton({ path }) {
  const [message, setMessage] = useState('');
  const handleDownload = async () => {
    try {
      const response = await fetch(path, { method: 'HEAD' });
      if (!response.ok) throw new Error('CV not found');
      const link = document.createElement('a');
      link.href = path;
      link.download = 'Avishka-Priyashan-CV.pdf';
      link.click();
      setMessage('');
    } catch {
      setMessage('CV will be available here once the PDF is added.');
    }
  };

  return <div className="download-wrap"><Button onClick={handleDownload} variant="primary" icon={<Download size={16} />}>Download CV</Button>{message && <small className="download-message">{message}</small>}</div>;
}

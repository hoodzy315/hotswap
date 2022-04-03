import { createContext, useState, useEffect } from 'react';

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [isToastDisplayed, setIsToastDisplayed] = useState(false);
  const [toastSummary, setToastSummary] = useState('Summary');
  const [toastDetail, setToastDetail] = useState('Detail');
  const [toastSeverity, setToastSeverity] = useState('info');

  return (
    <ToastContext.Provider value={{
      isToastDisplayed,
      toastSummary,
      toastDetail,
      toastSeverity,
      setIsToastDisplayed,
      setToastSummary,
      setToastDetail,
      setToastSeverity
    }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastContext;
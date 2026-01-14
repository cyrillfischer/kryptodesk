import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="p-4 bg-rose-500/10 rounded-full mb-4">
        <AlertCircle className="w-12 h-12 text-rose-400" />
      </div>
      <p className="text-rose-400 text-center max-w-md">{message}</p>
    </div>
  );
};

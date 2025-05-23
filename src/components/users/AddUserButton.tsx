'use client';

import { useTranslation } from '@/hooks/useTranslation';

interface AddUserButtonProps {
  onClick: () => void;
}

const AddUserButton = ({ onClick }: AddUserButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded bg-primary py-2 px-4.5 font-medium text-white hover:bg-opacity-80"
    >
      <svg
        className="fill-current"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
          fill="currentColor"
        />
      </svg>
      {t('addUser')}
    </button>
  );
};

export default AddUserButton; 
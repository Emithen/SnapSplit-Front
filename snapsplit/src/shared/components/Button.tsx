export type ButtonProps = {
  label: string;
  onClick?: () => void;
  enabled?: boolean;
  className?: string;
};

export default function Button({ label, onClick, enabled = true, className = '' }: ButtonProps) {
  const enabledStyle = 'bg-primary cursor-pointer';
  const disabledStyle = 'bg-gray-200';

  return (
    <button
      onClick={enabled ? onClick : undefined}
      className={`rounded-xl w-full py-[14px] text-white  ${enabled ? enabledStyle : disabledStyle} ${className}`}
      disabled={!enabled}
    >
      {label}
    </button>
  );
}

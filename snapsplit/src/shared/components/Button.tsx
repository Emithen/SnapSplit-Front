export type ButtonProps = {
  label: string;
  onClick?: () => void;
  enabled?: boolean;
  className?: string;
  bg?: 'primary' | 'grey';
};

export default function Button({ label, onClick, enabled = true, className = '', bg = 'primary' }: ButtonProps) {
  const bgColorMap = {
    primary: 'primary',
    grey: 'grey-650',
  };

  const enabledStyle = `cursor-pointer`;
  const disabledStyle = 'bg-grey-200 cursor-not-allowed';

  return (
    <button
      onClick={enabled ? onClick : undefined}
      className={`rounded-xl w-full py-[14px] text-white bg-${bgColorMap[bg]} ${enabled ? enabledStyle : disabledStyle} ${className}`}
      disabled={!enabled}
    >
      {label}
    </button>
  );
}

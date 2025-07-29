interface DeviderProps {
  className?: string;
  p?: string;
}

export default function Devider({ p = 'py-[3px]', className = '' }: DeviderProps) {
  return <div className={`flex w-full bg-grey-250 ${p} ${className}`}></div>;
}

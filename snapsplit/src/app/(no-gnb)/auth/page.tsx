export interface AuthProps {
  name: string;
}

export default function Auth({}: AuthProps) {
  return <button className="bg-amber-300 w-full py-5 px-4 cursor-pointer">로그인 버튼</button>;
}

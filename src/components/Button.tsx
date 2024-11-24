interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 "
    >
      {text}
    </button>
  );
}

type ButtonProps = {
  children: string;
  type?: string;
};

export default function Button({ type, children }: ButtonProps) {
  return (
    <button className={`btn ${type === 'secondary' ? 'btn--secondary' : ''}`}>
      {children}
    </button>
  );
}

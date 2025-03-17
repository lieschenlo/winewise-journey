
import { LucideProps } from "lucide-react";

export const Grape = (props: LucideProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
      <path d="M14 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
      <path d="M10 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
      <path d="M6 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
      <path d="M6 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path d="M14 7.5c1.2-1.7 3-3 6-3" />
    </svg>
  );
};

export default Grape;

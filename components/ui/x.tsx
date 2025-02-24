import Link from "next/link";
// import Logo from "@/public/images/ring_connect_logo.jpeg";

export default function X({ className }: { className?: any }) {
  return (
    <Link
      href="https://www.x.com/ringconnect"
      className="inline-flex align-center"
      aria-label="Cruip"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7534 0.00341797H18.8206L12.1196 8.47227L20.0028 19.9965H13.8303L8.99583 13.0071L3.46407 19.9965H0.394993L7.56236 10.9381L0 0.00341797H6.32916L10.6991 6.39196L15.7534 0.00341797ZM14.6769 17.9664H16.3764L5.40566 1.92685H3.58183L14.6769 17.9664Z"
          fill="#758599"
        />
      </svg>
    </Link>
  );
}

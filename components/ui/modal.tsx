export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    //backdrop
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${open ? "" : "hidden"} transition-colors ${open ? "visible bg-black/60" : "invisible"}`}
      onClick={onClose}
    >
      {/* modal */}
      <div
        className={`bg-[#2A2C30] font-switzer border-[.5px] border-[#758599] rounded-lg p-2 w-96 shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 p-1 rounded-lg z-10 text-gray-400 bg-transparent hover:bg-[#262626] hover:text-gray-600"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

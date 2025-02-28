import {
  Dispatch,
  SetStateAction,
  RefObject,
  ReactNode,
  useState,
  useRef,
  createContext,
} from "react";

interface ModalContextInterface {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isVisible?: string;
  targetRef?: RefObject<HTMLDivElement | null>;
  bottomTargetRef?: RefObject<HTMLAnchorElement | null>;
  setIsVisible?: Dispatch<SetStateAction<string>>;
}
export const ModalContex = createContext<ModalContextInterface>({});

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState("hidden");
  const targetRef = useRef<HTMLDivElement>(null);
  const bottomTargetRef = useRef<HTMLAnchorElement>(null);
  return (
    <ModalContex.Provider
      value={{
        open,
        setOpen,
        isVisible,
        targetRef,
        bottomTargetRef,
        setIsVisible,
      }}
    >
      {children}
    </ModalContex.Provider>
  );
}

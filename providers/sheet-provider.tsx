"use client";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { useMountedState } from "react-use";

export const SheetProvider = () => {
  const isMounted = useMountedState();
  if(!isMounted) {
    return null;
  }
  // this is a the same as  const [isMounted, setIsMounted] = useState(false);
  //useEffect(() => {
  //  setIsMounted(true);
  // }, []);   this will fix hydration issues/errors 

  
  return (
    <>
      <NewAccountSheet />
    </>
  );
};

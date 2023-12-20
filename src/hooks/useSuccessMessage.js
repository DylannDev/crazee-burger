import { useState } from "react";

export const useSuccessMessage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const showSuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return { isSubmitted, showSuccessMessage };
};

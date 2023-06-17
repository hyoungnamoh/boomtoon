import { MouseEvent, useEffect, useRef, useState } from 'react';

const useAccordion = ({ defaultOpen }: { defaultOpen?: boolean } = {}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    if (defaultOpen) {
      parentRef.current?.setAttribute('style', `height: ${childRef.current?.clientHeight}px`);
    }
  }, []);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.stopPropagation();

    if (!parentRef.current || !childRef.current) {
      return;
    }

    if (parentRef.current.clientHeight > 0) {
      parentRef.current.setAttribute('style', 'height: 0px');
    } else {
      parentRef.current.setAttribute('style', `height: ${childRef.current.clientHeight}px`);
    }

    setOpen(!open);
  };

  return {
    handleButtonClick,
    parentRef,
    childRef,
    open,
  };
};

export default useAccordion;

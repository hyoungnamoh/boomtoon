import { ReactNode, RefObject } from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  height: 0px;
  width: 100%;
  overflow: hidden;
  transition: height 0.35s ease;
`;

const AccordionContent = styled.div``;

const Accordion = ({
  parentRef,
  childRef,
  content,
}: {
  parentRef: RefObject<HTMLDivElement>;
  childRef: RefObject<HTMLDivElement>;
  content: string | ReactNode;
}) => {
  return (
    <AccordionWrapper ref={parentRef}>
      <AccordionContent ref={childRef}>{content}</AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;

import { ReactNode, RefObject } from 'react';
import * as S from './styles';

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
    <S.AccordionWrapper ref={parentRef}>
      <S.AccordionContent ref={childRef}>{content}</S.AccordionContent>
    </S.AccordionWrapper>
  );
};

export default Accordion;

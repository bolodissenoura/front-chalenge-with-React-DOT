import * as S from './styles'


type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({children} : FrontendProps) => {
 return(
     <>
        <S.SectionHome>{children}</S.SectionHome>
     </>
 )
}

export default Frontend;
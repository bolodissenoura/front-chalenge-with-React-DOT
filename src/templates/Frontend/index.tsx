import * as S from './styles';
import Header from '../../organisms/Header';

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({children} : FrontendProps) => {
 return(
     <>
        <S.SectionHome>
            <Header></Header>
        </S.SectionHome>
     </>
 )
}

export default Frontend;
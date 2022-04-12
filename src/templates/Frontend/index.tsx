import * as S from './styles';
import Header from '../../organisms/Header';
import About from '../../organisms/About';

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
    return (
        <>
            <S.SectionHome>
                <Header></Header>
            </S.SectionHome>
            <S.SectionCard>
                <h1>CARD TEST</h1>
            </S.SectionCard>
            <S.SectionAbout>
                <About></About>
            </S.SectionAbout>
        </>
    )
}

export default Frontend;
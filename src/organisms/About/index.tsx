import * as S from './styles';
import imgAbout from '../../assets/about/about-img.png';


const About = () => {
    return <S.About>
        <div className="pd-about wrapper">
            <div className="about-img">
                <img src={imgAbout} className="about-img" alt="" />
            </div>
            <p className="about-text">
                <span className="about-title">LOREM IPSUM</span>
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil eius, repudiandae neque, quaerat
                excepturi culpa eligendi hic tempore facere amet minus ratione vitae ipsam ab nemo debitis porro facilis
                soluta error?
                <br /><br />
                <strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil eius, repudiandae neque, quaerat
                    excepturi culpa eligendi hic tempore facere amet minus ratione vitae ipsam ab nemo debitis porro
                    facilis
                    soluta error?
                </strong>
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil eius, repudiandae neque, quaerat
                excepturi culpa eligendi hic tempore facere amet minus ratione vitae ipsam ab nemo debitis porro facilis
                soluta error?
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil eius, repudiandae neque, quaerat
                excepturi culpa eligendi hic tempore facere amet minus ratione vitae ipsam ab nemo debitis porro facilis
                soluta error?
            </p>
        </div>
    </S.About>
}

export default About;
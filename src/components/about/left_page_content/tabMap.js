
import AboutContent from "./AboutContent";
import ExperienceContent from "./ExperienceContent";
import InterestsContent from "./InterestsContent";
import Certificate from "./Certificate";
import foundations from '../../images/foundations.jpg';
import fullstack from '../../images/fullstack.jpg';
import ghPages from '../../images/ghPages.jpg';
import jsCourse from '../../images/jsCourse.jpg';
import learnHowToCode from '../../images/learnHowToCode.jpg';

const tabMap = {
    'about': <AboutContent />,
    'experience': <ExperienceContent />,
    'interests': <InterestsContent />,
    'code_foundations': <Certificate certificateSrc={foundations} />,
    'full_stack_development': <Certificate certificateSrc={fullstack} />,
    'github': <Certificate certificateSrc={ghPages} />,
    'javascript': <Certificate certificateSrc={jsCourse} />,
    'learn_to_code': <Certificate certificateSrc={learnHowToCode} />
}


export default tabMap;
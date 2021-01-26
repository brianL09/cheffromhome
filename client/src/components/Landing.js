import Nav from './Nav';
// import axios from 'axios';
import submitForm from '../apis/createLessonAPI';
import SvgIcon from './icons/SvgIcon';
import sprite from '../SVG/sprite.svg';

const Landing = () => {
    const submit = async () => {
        let res = await submitForm.post("");

        console.log(res);
    }
    return(
        <div style={{}}>
            SVG
            <SvgIcon icon={"#icon-close"} size="2em"></SvgIcon>
            <SvgIcon icon={"#icon-photo-add"} size="3em"></SvgIcon>
            <SvgIcon icon={"#icon-stopwatch"} size="1em"></SvgIcon>
            {/* <div onClick={submit}>SUBMIT</div> */}
            {/* <Nav></Nav> */}
        </div>
    )
}

export default Landing;
import Nav from './Nav';
// import axios from 'axios';
import submitForm from '../apis/createLessonAPI';

const Landing = () => {
    const submit = async () => {
        let res = await submitForm.post("");

        console.log(res);
    }
    return(
        <div className="test">
            <div onClick={submit}>SUBMIT</div>
            <Nav></Nav>
        </div>
    )
}

export default Landing;
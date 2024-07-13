
import './Secondscount.css';
import { CiAlarmOn } from "react-icons/ci";



function Secondscounter(props) {
    return <>
        <div className='counterBody'>
            <div className='timer-icon'>
            <CiAlarmOn style={{fontSize: '50px'}}/>
            </div>
            <div className='seconds positionSix'>{props.positionSix % 10}</div>
            <div className='seconds positionFive'>{props.positionFive % 10}</div>
            <div className='seconds positionFour'>{props.positionFour % 10}</div>
            <div className='seconds positionThree'>{props.positionThree % 10}</div>
            <div className='seconds positionTwo'>{props.positionTwo % 10}</div>
            <div className='seconds positionOne'>{props.positionOne % 10}</div>





        </div>
    </>
};

export default Secondscounter;

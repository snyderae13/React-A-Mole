import {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'


const MoleContainer =(props) =>{
    let [displayMole, setDisplayMole] = useState(false);

    const handleClick = (e) =>{
        props.setScore(props.score +1)
        setDisplayMole(false);
    }

    let showMole = displayMole ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleClick={handleClick} /> : <EmptySlot toggle={setDisplayMole} />


    return(
        <div style={{'display':'inline-block'}}>
            {showMole}
        </div>
    )


}

export default MoleContainer
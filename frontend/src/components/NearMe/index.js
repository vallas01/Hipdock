import './NearMe.css'

const NearMe = () => {

    const shoot1 = () => {
        alert("Great Shot!");
    }
    const shoot2 = (a) => {
        alert(a);
    }
    const shoot3 = (a, b) => {
        // type of event
        alert(b.type);
    }

    return (
        <div className='nearMe-outer-container'>
            <div className='nearHeadingOne'>UNDER CONSTRUCTION</div>

            <button onClick={shoot1}>Take the shot!</button>
            <button onClick={()=>shoot2("Goal!")}>Take the shot,again!</button>
            <button onClick={(event) => shoot3("Goal!", event)}>How are you shooting!</button>

        </div>
    )
}

export default NearMe

export default function Random(props){
    function rand(min,max){
        return Math.floor(Math.random()*(max-min+1))+min
    }
    return(
        <div>
            <p>Random value between {props.min} and {props.max} = {rand(props.min,props.max)}</p>
        </div>
    )
}
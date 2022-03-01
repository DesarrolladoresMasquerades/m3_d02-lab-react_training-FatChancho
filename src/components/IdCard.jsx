export default function IdCard(props){
    return(
        <div>
            <p>Last Name:{props.lastName}</p>
            <p>First Name:{props.firstName}</p>
            <p>gender:{props.gender}</p>
            <p>height:{props.height}</p>
            <p>birth:{props.birth}</p>    
            <img src={props.picture} alt='fotooooo'></img>
        </div>
    )
}
 
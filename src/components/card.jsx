import { Link } from 'react-router-dom'
function Card(props) {
    return(
        <Link to={`/${props.id}`}>
            <div className={"cardHome"}>
                <img className={"cardImage"} src={props.image} alt={`image de fond ${props.titre}`}/>
                <div className={"cardDescriptionLogo"}>
                    <img className={"cardLogo"} src={props.logo} alt={`logo ${props.titre}`}/>
                    <p className={"cardDescription"}>{props.description} </p>
                </div>
            </div>
        </Link>
    );
}
export default Card;
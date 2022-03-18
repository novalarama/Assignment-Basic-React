export default function Alert(props){
    return(
        <div>
            <div className={"alert alert-" + props.type}>
                <h4>{props.header}</h4>

                {props.children}    
            </div>
        </div>
    )
}
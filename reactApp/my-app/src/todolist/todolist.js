function ToDoList(props){
    console.log(props);
    console.log(props);
    console.log(props);
    let {name,status} = props
    return (
        <div>
            <h1>{name}</h1>
            <h6>{status}</h6>
            <h4>{props.name}</h4>
            <h4>{props.status}</h4>
        </div>
    )   
}
export default ToDoList;
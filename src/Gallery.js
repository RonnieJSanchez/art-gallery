function Gallery (props) {
    return (
        <div style={{'width': '100%'}}>
            <img style={{'width': '80%', 'max-height': 'auto'}} src={props.objectImg} alt={props.title}/>
            <p>{props.artist}</p>
        </div>
    )
}

export default Gallery
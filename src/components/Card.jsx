const Card = ({ video }) => {
    
    const handleClick = () => {
        alert('Clicked');
    }

    return (
        <div className="card">
            <h2>{video.title}</h2>
            <p>{video.description}</p>

            <button onClick={handleClick}>Click me</button>
        </div>
    )
};

export default Card;
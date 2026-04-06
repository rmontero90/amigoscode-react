const Card = ({ video, children }) => {
    
    const handleClick = () => {
        alert('Clicked');
    }

    return video.genre === 'Comedy' && (
        <div className="card">
            <h2>{video.title}</h2>
            <p>{video.description}</p>

            <button onClick={handleClick}>Click me</button>
        </div>
    )
};

export default Card;
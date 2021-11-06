const SongCard = (props) => {

    const songs = props.songs.map((song, index) => {
        return (
            <div className="card col-8  mr-1">
                <div key={index} class="card-body">
                    <h5 className="card-title text-center">Titre : {song.titre}</h5>
                    <p className="card-text">Chanteur : {song.yakuza}</p>
                    <button className="btn btn-success">Jouer</button>
                </div>
            </div>
        )
    })
    return (
        <div className="col-6 d-flex">{songs}</div>
    )
}
export default SongCard
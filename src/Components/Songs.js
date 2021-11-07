const SongCard = (props) => {
    const songs = props.songs.map((song, index) => {
        return (
            <div className="card mb-2">
                <div key={index} class="card-body">
                    <h5 className="card-title text-center">Titre : {song.nom}</h5>
                    <p className="card-text">Chanteur : {song.yakuza}</p>
                    <a target="_blank" href={song.lien} rel="noreferrer" className="text-white"><button className="btn btn-success mr-3">Lien</button></a>
                    <button className="btn btn-danger" onClick={() => { props.removeSong(index) }} >Supprimer</button>
                </div>
            </div>
        )
    })
    return (
        <div className="row row-cols-4">{songs}</div>
    )
}
export default SongCard
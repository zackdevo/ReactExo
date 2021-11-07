import { Component } from "react";

class SongForm extends Component {
    initialState = {
        nom: "",
        yakuza: "",
        lien: "",
    }

    state = this.initialState;

    handleSongChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitSongForm = (props) => {
        this.props.handleSongSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { nom, yakuza, lien } = this.state;

        return (
            <form className="mb-3">
                <div className="form-group">
                    <label htmlFor="titre">Titre : </label>
                    <input className="form-control"
                        required
                        type="text"
                        name="nom"
                        id="nom"
                        value={nom}
                        onChange={this.handleSongChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Chanteur : </label>
                    <input className="form-control"
                        required
                        type="text"
                        name="yakuza"
                        id="yakuza"
                        value={yakuza}
                        onChange={this.handleSongChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Lien :</label>
                    <input className="form-control"
                        required
                        type="url"
                        name="lien"
                        id="lien"
                        value={lien}
                        onChange={this.handleSongChange} />
                </div>
                <input className="btn btn-success" type="button" value="Ajouter" onClick={this.submitSongForm} />
            </form>
        )
    }
}

export default SongForm
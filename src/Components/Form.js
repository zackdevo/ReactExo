import { Component } from "react/cjs/react.production.min";

class Form extends Component {
    initialState = {
        titre: "",
        description: ""
    }

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = (props) => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { titre, description } = this.state;

        return (
            <form>
                <div className="form-group">
                    <label htmlFor="titre">Titre : </label>
                    <input className="form-control"
                        type="text"
                        name="titre"
                        id="titre"
                        value={titre}
                        onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description : </label>
                    <input className="form-control"
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={this.handleChange} />
                </div>
                <input className="btn btn-success" type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;
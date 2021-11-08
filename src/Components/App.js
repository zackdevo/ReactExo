import { Component } from "react/cjs/react.production.min";
import Form from "./Form";
import SongForm from "./SongForm";
import SongCard from "./Songs";
import Table from "./Table";

class App extends Component {
  state = {
    tasks: [
      {
        titre: "Apprendre React",
        description: "Essaie de pas devenir fou"
      }
    ],
    karaokeSongs: [
      {
        nom: "Bakamitai",
        yakuza: "Kiryu",
        lien: "https://www.youtube.com/watch?v=g3jCAyPai2Y&ab_channel=SenshiOngaku"
      },
      {
        nom: "24h Cinderella",
        yakuza: "Majima",
        lien: "https://www.youtube.com/watch?v=jry5e4qN26o&ab_channel=%E7%9C%9F%E5%B3%B6%E5%90%BE%E6%9C%97%28%E5%AE%87%E5%9E%A3%E7%A7%80%E6%88%90%29-Topic"
      }]
  }

  removeTask = (index) => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter((tasks, i) => {
        return i !== index
      }),
    })

  }

  removeSong = (index) => {
    const { karaokeSongs } = this.state;
    this.setState({
      karaokeSongs: karaokeSongs.filter((songs, i) => {
        return i !== index
      }),
    })
  }

  hello = () => {
    const message = 2 + 2 - 3 + " Hello bozo"
    console.log(message);
  }

  bye = () => {
    const message = 59 + 7 + " Bye bozo"
    console.log(message);
  }

  handleSubmit = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  handleSongSubmit = (song) => {
    this.setState({
      karaokeSongs: [...this.state.karaokeSongs, song],
    })
  }

  render() {
    return (
      <div className="container" >
        <div className="row">
          <Table crazyTasks={this.state.tasks} removeTask={this.removeTask} hello={this.hello} bye={this.bye} />
          <div className="col-10">
            <Form handleSubmit={this.handleSubmit} />
          </div>
        </div>
        <h2 className="text-center h2 mb-3">Liste de chanson yes</h2>
        <SongCard songs={this.state.karaokeSongs} crazyTasks={this.state.tasks} removeSong={this.removeSong} />
        <SongForm handleSongSubmit={this.handleSongSubmit} />
      </div>
    )
  }

}

export default App;

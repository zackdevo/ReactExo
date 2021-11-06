import { Component } from "react/cjs/react.production.min";
import Form from "./Form";
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
        titre: "Bakamitai",
        yakuza: "Kiryu",
        source: "../mp3yes/bakamitai.mp3"
      },
      {
        titre: "24h Cinderella",
        yakuza: "Majima",
        source: "../mp3yes/cinderella.mp3"
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

  render() {
    return (
      <div className="container" >
        <Table crazyTasks={this.state.tasks} removeTask={this.removeTask} hello={this.hello} bye={this.bye} />
        <div className="col-10">
          <Form handleSubmit={this.handleSubmit} />
        </div>
        <SongCard songs={this.state.karaokeSongs} crazyTasks={this.state.tasks} />
      </div>
    )
  }

}

export default App;

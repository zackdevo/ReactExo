import { Component } from "react/cjs/react.production.min";
import Form from "./Form";
import Table from "./Table";

class App extends Component {
  state = {
    tasks: [
      {
        titre: "Apprendre React",
        description: "Essaie de pas devenir fou"
      }
    ],
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
      </div>
    )

  }

}

export default App;

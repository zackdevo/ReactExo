
const TableHead = (props) => {
    return (
        <thead>
            <tr>
                <th>Titre</th>
                <th>Description</th>
                <th>Nombre de tâches : {props.crazyTasks.length}</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {

    const rows = props.crazyTasks.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.titre}</td>
                <td>{row.description}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => props.removeTask(index)}>Supprimer</button>
                </td>
                <td>
                    <button className="btn btn-primary" onClick={() => props.hello()}>Hi</button>
                </td>
                <td>
                    <button className="btn btn-primary" onClick={() => props.bye()}>Bye</button>
                </td>

            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )

}

const Table = (props) => {
    const { crazyTasks, removeTask, hello, bye } = props;
    return (
        <table className="table">
            <TableHead crazyTasks={crazyTasks} />
            <TableBody crazyTasks={crazyTasks} removeTask={removeTask} hello={hello} bye={bye} />
        </table>
    )
}

export default Table;
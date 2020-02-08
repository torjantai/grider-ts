import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function; // can't use typeof fetchTodos as redux connect will not accept that :(
  deleteTodo: typeof deleteTodo;
}

// fething is in app state just for demonstrating using local state
// you would normally put in in store..
// the whole implementation is something you wouldn't normally do.
interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fetching: false
    };
  }
  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number) => (): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map(
      (todo: Todo): JSX.Element => {
        return (
          <div onClick={this.onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
          </div>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch!</button>
        {this.state.fetching ? "loading..." : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

import { Component } from "react";

export default class File extends Component {
  render() {
    return (
      <div className="text-lg flex items-center gap-1 p-1">
        <span className="material-symbols-outlined text-slate-400">draft</span>
        {this.props.name}
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hidden: true, loading: false, viewing: false};
    // this.getCurrentServer.bind(this)
  }

  componentDidUpdate() {
    if (this.props.server.id === this.getCurrentServer() && this.state.viewing === false) {
      this.setState({ viewing: true });
    } else if (this.props.server.id !== this.getCurrentServer() && this.state.viewing === true) {
      this.setState({ viewing: false})
    }
  }

  getCurrentServer() {
    
    let url = window.location.href.split('server').slice(1);
    if (url[0]) {
    let integer = parseInt(url[0].split('/').slice(1)[0]);
    return integer;
    } else {
      return -1;
    }
  }

  render() {
    // if (this.props.server.id !== this.getCurrentServer() && this.state.viewing === true) {
    //   this.setState({viewing: false})
    // 
    const serverWords = this.props.server.name.split(' ')
    let serverInitials = serverWords.map((word) => {
      return word.slice(0, 1).toUpperCase()
    })
    if (serverInitials.length > 3) {
      serverInitials = serverInitials.slice(0, 3)
    }
    return (
      <li className={ this.state.viewing ? "viewing-server-icon" : "server-icon"} id={this.props.server.id} >
          <Link className="server-show-link" to={`/home/server/${this.props.server.id}`}>
            <h1 className="server-initials">{serverInitials}</h1>
          </Link>
        
        
        <div className="server-index-item-hover">
          <p className="server-index-item-hover-name arrow_box">{this.props.server.name}</p>
          <h1 className={this.state.viewing ? "viewing-server-index-item-hover-whitespace" : "server-index-item-hover-whitespace"} ></h1>
        </div>
        
      </li>
     
      
    )
  }
}



export default ServerIndexItem;
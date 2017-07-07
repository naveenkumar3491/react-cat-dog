var React = require('react');

var compStyle = {
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto'
}

var buttonStyle = {
    height: '25px',
    width: '70px',
    marginTop: '10px',
    marginLeft: '5px',
    marginRight: '5px'
}

class PetComponent extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={compStyle}>
                <h3>{this.props.petName} Likes: {this.props.likesCount}</h3>
                <img src={this.props.petImageUrl}
                    alt={"Cute "+this.props.petName} style={{width:300, height: 300}}/>
                    <br />
                <button style={buttonStyle} value= {this.props.petName} onClick={this.props.onLikeBtnClick}>Like</button>
                <button style={buttonStyle} value= {this.props.petName} onClick={this.props.onDislikeBtnClick}>Dislike</button>
            </div>
        );
    }
}

module.exports = PetComponent;
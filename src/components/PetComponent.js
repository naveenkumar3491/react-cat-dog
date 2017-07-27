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

var PetComponent = function (props) {
    var disabled = false;
    if (props.result !== '') {
        var resultsStyle = null;
        if (props.result === 'Looser') {
            resultsStyle = { color: 'red' }
        } else {
            resultsStyle = { color: 'green' }
        }
        disabled = true;
    }
    return (
        <div style={compStyle}>
            <h2 style={resultsStyle}>{props.result}</h2>
            {(props.result) ? <h3>{props.petName} Likes: {props.likesCount}</h3> : <h3>{props.petName}</h3>}
            <img src={props.petImageUrl}
                alt={"Cute " + props.petName} style={{ width: 300, height: 300 }} />
            <br />
            <button style={buttonStyle} value={props.petName} disabled={disabled} onClick={props.onLikeBtnClick}>Like</button>
            <button style={buttonStyle} value={props.petName} disabled={disabled} onClick={props.onDislikeBtnClick}>Dislike</button>
        </div>
    );
}

module.exports = PetComponent;
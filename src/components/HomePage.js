var React = require('react');
var PetComponent = require('./PetComponent');

var style = {
    textAlign: 'center',
    fontSize: '2em',
    color: 'rebeccapurple'
};

var btnStyle = {
    marginTop: '30px',
    marginRight: '5px',
    height: '25px'
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catLikesCount: 0,
            dogLikesCount: 0
        }
        this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
        this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
        this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
        this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    }
    handleLikeBtnClick(event) {
        var petName = event.target.value;
        if(petName === 'Cat'){
            this.setState(function(prevState){
                return{
                    catLikesCount: prevState.catLikesCount + 1,
                    dogLikesCount: prevState.dogLikesCount
                }
            })
        }else if(petName === 'Dog'){
            this.setState(function(prevState){
                return{
                    catLikesCount: prevState.catLikesCount,
                    dogLikesCount: prevState.dogLikesCount + 1
                }
            })
        }
    }

    handleDislikeBtnClick(event) {
        var petName = event.target.value;
        if(petName === 'Cat'){
            this.setState(function(prevState){
                return{
                    catLikesCount: prevState.catLikesCount - 1,
                    dogLikesCount: prevState.dogLikesCount
                }
            })
        }else if(petName === 'Dog'){
            this.setState(function(prevState){
                return{
                    catLikesCount: prevState.catLikesCount,
                    dogLikesCount: prevState.dogLikesCount - 1
                }
            })
        }
    }
    handleShowWinnerBtnClick() {
        var catLikesCount = this.state.catLikesCount;
        var dogLikesCount = this.state.dogLikesCount;
        if (catLikesCount > dogLikesCount) {
            console.log('cat is the winner')
        } else if (catLikesCount < dogLikesCount) {
            console.log('dog is the winner')
        } else {
            console.log('Tie')
        }
    }
    handleStartOverBtnClick() {

    }
    render() {
        return (
            <div>
                <h1 style={style}>Welcome to Cat and Dog Cuteness Fight Game!!</h1>
                <div style={{ marginTop: 60, textAlign: 'center' }}>
                    <PetComponent
                        petName="Cat"
                        likesCount={this.state.catLikesCount}
                        petImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMIK422RaRLfKVx_w7xl6Z6ffcza8j7AYxEq9OCbXcP6eVxOM"
                        onLikeBtnClick = {this.handleLikeBtnClick}
                        onDislikeBtnClick = {this.handleDislikeBtnClick}
                    />
                    <PetComponent
                        petName="Dog"
                        likesCount={this.state.dogLikesCount}
                        petImageUrl="https://lh6.ggpht.com/EoH-UNwa_XRNuk0jB7UQDVQdTSigPu4B5zrb3I5iXk289KYfGZOzJgfwP8Y9DEA1O_k=h900"
                        onLikeBtnClick = {this.handleLikeBtnClick}
                        onDislikeBtnClick = {this.handleDislikeBtnClick}
                    />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>
                    <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Start Over</button>
                </div>
            </div>
        );
    }

}

module.exports = HomePage;
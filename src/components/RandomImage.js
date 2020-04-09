import React from 'react';

class RandomImage extends React.Component {
    constructor(){
        super();
        this.state = {
            images: ['obi-wan.jpg','anakin.jpg','mace.jpg','yoda.jpg','luke.jpg', 'revan.jpg', 'malgus.jpg','nihilus.jpg','krayt.jpg','sidious.jpg'],
            image:''
        }
    }
    handleRandom = () => {
        this.setState({image: this.state.images[Math.floor(Math.random() * 10)]})
    }
    render(){
        return (
            <div style={{textAlign:'center'}}>
                <br />
                <br />
                <br />
                <button style={{fontSize:'20px'}} onClick={this.handleRandom}>Random Pic</button>
                <br />
                <img width='300px' src={'images/' + this.state.image} alt='.' />
            </div>
        )
    }
}

export default RandomImage;
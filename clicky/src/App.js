import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import img from "./image.json";
import "./App.css";

console.log("i'm here"+ process.env.PUBLIC_URL)
class App extends Component {
  state = {
    img,
    clicked: [],
    score: 0,
    highscore: 0
  };

  imageClicked = id => {
    const clicked = this.state.clicked;

    //if statement when image has already been clicked
    //whatever image is clicked add "id" to the "clicked array"
    //if id is in the array 
    if (clicked.includes(id)) {
      alert("I said DON'T click the SAME image twice!");
      if (this.state.score > this.state.highscore) {
        this.setState({ img, clicked: [], highscore: this.state.score, score: 0 });
        return;
      } else {
        this.setState({ img, clicked: [], score: 0 });
        return;
      }
    }

    //else statement when the id is not in the array
    // if the image hasn't been clicked before increase
    // the score/highscore by one.  Then randomize images
    //if you get all 12 run win alert. 
    else {
      clicked.push(id);
      this.setState({ img, score: clicked.length });

      for (let i = img.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [img[i], img[j]] = [img[j], img[i]];
      }
      if (clicked.length === 12) {
        alert("Congrats! Play it again and show your friends!");
        this.setState({ img, clicked: [], highscore: 12, score: 0 });
      }
      return;
    }
  };
    // render all of the cards. with image id's from the JSON
    //image json.  
  render() {
    return (
      <div>
        <NavBar score={this.state.score} highscore={this.state.highscore} />
        <Jumbotron />
        <Wrapper>
        {this.state.img.map(img => (
            <Cards 
            id={img.id} 
            key={img.id} 
            img={img.img} 
            imageClicked={this.imageClicked}
            />
        ))}
          </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
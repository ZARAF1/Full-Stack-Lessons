// JS in JSX

const calculate = <h1>{2+3}</h1>;
const calculation = <h1>2+3={2+3}</h1>; // 2+3 = 5

// 20 digits of PI
const calculatePI= (
    <div>
        <h1>
            {Math.PI.toFixed(20)}
        </h1>
    </div>
)

// using variables in JSX Elements

const name = "Ali";
const greeting = <h1>Hello, {name}</h1>
ReactDOM.render(<h1>Hello, {name}</h1>, document.getElementById('app'))
//OR use
ReactDOM.render(greeting, document.getElementById('app'))

// using variables as value of attributes
const imageURL = "./images/pic.jpg"
const img = <img src={imageURL} alt="some image description" width ="200" height="200"/>

const sidelength="200";
const image = <img src="./image/k.jpg" alt="some image" width={sidelength} height={sidelength} />

/*using objects to set values*/

const pics ={
    bear:"./images/bear.jpg",
    cat:"./images/cat.jpg"
}

const image = <img src={pics.bear} alt="cuddly bear"/>


// using event listeners

function myFunction (){
    alert("This is an image")
}

const image= <img src={pics.bear} onClick={myFunc}>

/*Another examples of event listeners in jsx*/

function makeDog (e){
    e.target.setAttribute("src","./image/dog.jpg");
    e.target.setAttribute("alt", "my dog");
}

const image = <img src="./image/cat.jpg" alt="my cat" onClick={makeDog} />



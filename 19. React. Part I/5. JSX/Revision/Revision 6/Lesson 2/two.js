// doesnt work when we embed js if else directly in a JSX element
const checkConditional = (
    <h1>{
        if(true){
            return "Thanks"
                }
        else
                {
            return "Bye"
                }
    }
    </h1>
)

// solution embed jsx in if else

let message;
if(true){
    message=<h1>Thanks</h1>
}
else
{
    message=<h1>Bye</h1>
}


/*Another example*/

const coinToss=()=>{
    if(Math.random()<0.5){
        return "heads"
    }
    else{
        return "tails"
    }
}

const pics = {
    bear:'',
     cat:''
}


let image;
if (coinToss()==="heads"){
    image = <img src={pics.bear} alt="cuddly bear"/>
}
else {
    image = <img src={pics.cat} alt="stupid cat"/>
}

ReactDOM.render(image, document.getElementById("app"))


/*another way*/

const image = <img src={pics[coinToss()==="heads"? "bear":"cat"]};




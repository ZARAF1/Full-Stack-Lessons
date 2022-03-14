//1. JSX saved in a variable
const h1=<h1>Hello World</h1>
const para=<p>Hello World</p>


//2. JSX saved in an object
const team ={
    captain:<li>Ali</li>
    wiseCaptain:<li>Asima</li>
    keeper:<li>Shaheen</li>
}


// 3. Attributes in JSX
const link = <a href="">My Link</a>
const image =<img src="" alt="New Image" width="200px" height="400px"/>

/* 4. Nested JSX */
const para = <p><a href="">My Link</a></p>

// for readability
const para = <p>
                    <a href="">My Link</a>
                </p>

// Nested JSX if JSX expression takes up more than none line then you must wrap it in ()
const para = (<p>
    <a href="">My Link</a>
</p>)


// 5. Outer Elements
// below example works
const paragraph = (
    <div>
        <p></p>
        <p></p>
    </div>
)

// below example "doesnt" work

const paragraph = (
         <p></p>
        <p></p>
 )

// 6.ReactDOM render
// Method 1: Assigning JSX Element to render method directly
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("app"))

// Method 2: Assigning a variable to render method
const paragraph = (
    <div>
        <p></p>
        <p></p>
    </div>
)

ReactDOM.render(paragraph, document.getElementById("app"))

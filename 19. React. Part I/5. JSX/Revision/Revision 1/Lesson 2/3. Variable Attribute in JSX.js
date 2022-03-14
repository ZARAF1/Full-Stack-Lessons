// common to set attribute values using variables in JSX
//Example 1
const length = '200px';
const panda = (
    <img src="panda.jpg"
         alt="panda image"
         width={length}
         height={length} />
)
// Example 2
const pics={
    owl:"https",
    bird:"https",
    penguin:"https"
}

const owlImage=(
    <img src={pics.owl}
         alt="owl pics"/>
)


const birdImage=(
    <img src={pics.bird}
         alt="bird pics"/>
)


const penguinImage=(
    <img src={pics.penguin}
         alt="penguin pics"/>
)


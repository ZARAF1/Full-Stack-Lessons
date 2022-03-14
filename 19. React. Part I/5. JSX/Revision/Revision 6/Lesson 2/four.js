const people = ['Rowe', 'Prevost', 'Gare'];
const peopleList = people.map((person,i)=>{
    return <li id={'person_' + i}>{person}</li>

})

const listedPeople = <ul>{peopleList}</ul>

ReactDOM.render(listedPeople, document.getElementById('app'))
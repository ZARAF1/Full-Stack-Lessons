const judgemental = Math.random() < 0.5;


const favFoods = (
    <div>
        <li>Pizza</li>
        <li>Rhubarb</li>
        {judgemental && <li></li>}
    </div>
)



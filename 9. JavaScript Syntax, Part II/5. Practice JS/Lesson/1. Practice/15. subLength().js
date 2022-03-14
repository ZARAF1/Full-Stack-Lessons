/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should
 search the string for the two occurrences of the character and return the length between them including the
  2 characters. If there are less than 2 or more than 2 occurrences of the character the function should
  return 0.
  Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
 */

// Write function below

const subLength=(param1,param2)=>{
    let count=0;
    let iterator=[];
        for (let i=0;i<=param1.length;i++) {
            if (param1[i] === param2) {
                count++;
                iterator.push(i)
            }

        }
    if (count === 0) {
        return 0;
    }
    else if (count === 1) {
        return 0;
    }
    else if((count === 2) && (iterator[1] - iterator[0] === 1))
    {
        return iterator[0]
    }
    else if((count===2)&&(iterator[1]-iterator[0]>1)){
    }
    else if(count === 3)
    {
        return 0;
    }        return iterator[1]


}

console.log(subLength('nose', 'z'))
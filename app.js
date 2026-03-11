function showRating(rating) {
    let result = '';
    for (let i = 0; i < 4; i++) {
        if (rating >= 1) {
            result += '★';
        } else if (rating === 0.5) {
            result += '½';
        } else {
            result += '☆';
        }
        rating--;
    }
    return result;
}

console.log(showRating(4.5));

function sortHighToLow(arr) {
    return arr.sort((a, b) => b - a);
}

console.log(sortHighToLow([1, 3, 5, 2, 4]));

console.log(sortHighToLow([
    {id: 1, price: 50 },
    {id: 2, price: 0 },
    {id: 3, price: -500 },
 
  ])
);

async function postByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

    const result = await promise.json();

    const posts = result.filter(element => element.userId === userId);

    console.log(posts);

}

postByUser(4);

async function firstSixIncompleteTasks(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json();

    const incompleteTasks = result.filter(element => element.completed === false);

    console.log(incompleteTasks);
}

firstSixIncompleteTasks(6);
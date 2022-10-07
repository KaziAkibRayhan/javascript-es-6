document.getElementById('new-friend').addEventListener('click', function () {
    const mainContainer = document.getElementById('main-container');
    const newFriend = document.createElement('div');
    newFriend.classList.add('friend');
    newFriend.innerHTML = `
    <h2>Some Friend Name Dynamic</h2>
    <p>This is a new friend. It will be added to the list of friends.</p>
   `;
    mainContainer.appendChild(newFriend);
});
document.getElementById('apply-bg').addEventListener('click', function () {
    const friendsBg = document.getElementsByClassName('friend');
    for (const friendBg of friendsBg) {
        friendBg.style.padding = '10px';
        friendBg.style.margin = '10px';
        friendBg.style.backgroundColor = 'pink';
    }
})
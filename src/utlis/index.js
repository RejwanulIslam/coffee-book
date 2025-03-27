//get all data lockel stroge
const getAllFavorite = () => {
    const all = localStorage.getItem('favorits')
    if (all) {
        const favorits = JSON.parse(all)
        console.log(favorits)
        return favorits
    }
    else {
        console.log([])
        return []
    }


}


//add coffee to lockel stroge
const addFavorite = (coffee) => {
    console.log(coffee)
    const favorits = getAllFavorite();
    const isExist = favorits.find(item=> (item.id == coffee.id))
    if(isExist)return alert('allrady exist')
    console.log(favorits)
    favorits.push(coffee)
    localStorage.setItem('favorits', JSON.stringify(favorits))
}

const removeFavorite = (id) => {
    const favorits = getAllFavorite();
    const ramaning = favorits.filter(coffee =>coffee.id != id )
    localStorage.setItem('favorits', JSON.stringify(ramaning))

}

export { addFavorite, getAllFavorite,removeFavorite };
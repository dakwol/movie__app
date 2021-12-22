function Food({name, picture}){
  return (<div>
    <h3> Я люблю {name}</h3>
    <img src={picture}></img>
  </div>)
}

const foodLike = [
  {
    'id': 1,
    'name':'борщ',
    'image': 'https://s1.eda.ru/StaticContent/Photos/121124234750/131219150003/p_O.jpg',
    'rating': 4.8
  },
  {
    'id': 2,
    'name':'плов',
    'image': 'https://s1.eda.ru/StaticContent/Photos/121124234750/131219150003/p_O.jpg',
    'rating': 4.4
  },
  {
    'id': 3,
    'name':'компот',
    'image': 'https://s1.eda.ru/StaticContent/Photos/121124234750/131219150003/p_O.jpg',
    'rating': 4.3
  }
]

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
      {foodLike.map(renderFood)}
    </div>
  );
}

export default App;

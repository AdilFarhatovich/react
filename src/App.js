import { Card } from "./componts/Card";

const data = [
 {
  full_name:"Адил Мазинов",
  postion:"Js Developer",
  id:1
 },
 {
  full_name:"Эрбол Касымов",
  postion:"React Developer",
  id:1
 },
 {
  full_name:"Бекжан Шейшенов",
  postion:"Js Developer",
  id:1
 }
]


export const App = () => {
  return (
    <div className="App">
      {
        data.map((el,id) => {
          return <Card full_name={el.full_name}
          postion={el.postion}
          id={el.id}
          key={id}/>
        })
      }
    </div>
  )
}


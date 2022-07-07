import { Outlet, Link } from "react-router-dom";
import Header from "../header/Header";
import { useState, useEffect } from "react";
import Items from "./Items";

const Layout = () => {
  const stringifyData = data => JSON.stringify(data, null, 2)
  const initialData = stringifyData({ data: null })
  const [data, setData] = useState(initialData)
  const [type, setType] = useState('Gold_Rings')

  useEffect(() => {
    const fetchData = () => {
      const uri = 'http://localhost:4000/items?type=' + type 
      fetch(uri)
        .then(res => res.json())
        .then((res) => {
          const { title, type, description } = res[0]
          const dataVal = stringifyData({
            title,
            type,
            description
          })
          setData(dataVal)
        })
    }

    fetchData()
  }, [type])

  return (
    <>
        <Header/>
      <p>Click the buttons below to fetch data</p>
      <button
        onClick={() => setType('Gold_Rings')}
        style={{ outline: type === 'Gold_Rings' ? '1px solid' : 0 }}
      >
        Gold Rings
      </button>
      <button
        onClick={() => setType('Earrings')}
        style={{ outline: type === 'Earrings' ? '1px solid' : 0 }}
      >
        Earrings
      </button>

      <section>
        <Items data={data}/>
        <pre>{data}</pre>
      </section>
    </>
  )
};

export default Layout;



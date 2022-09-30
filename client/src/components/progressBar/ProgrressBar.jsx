import { useEffect } from 'react'
import { React, useState } from 'react'
import './progressBarCSS.css'

const ProgrressBar = () => {
  const [data, setData] = useState(
    [
      {name: 'Sold', color: '#BD1FBE', value: 677},
      {name: 'Got free', color: '#FC64FF', value: 23},
      {name: 'Burned', color: '#00FF00', value: 202},
      {name: 'Free Float', color: '#808080', value: 323}
    ]
  )
  const [newItem, setNewItem] = useState({name: '', color: '', value: '#fff'})

  const helper = (data, value) => {
    value = Number(value);
    let totalValue = 0;
    data.forEach((item) => {
      totalValue += Number(item.value)
    })
    return {
      totalValue,
      precent: Math.floor(((value / totalValue) * 100))
    }
  }

  const addHendler = (event) => {
    setNewItem ({ ...newItem, [event.target.name]: event.target.value })
  }
  const addNewItem = () => {
    console.log(newItem);
    setData([...data, newItem])
  }

  useEffect(() => {
  }, [data])

  return (
    <div className="wrapper col-xl-10  col-lg-10 col-md-10 col-sm-10 col-10">
      <div className="progressBar">
          {data.map((item) => (
            <div key={item.name} className="bar"  style={{width: helper(data, Number(item.value)).precent + "%", backgroundColor: item.color}}></div>
          ))}
      </div>
      <div className="disc mb-10">
        {data.map((item) => (
          <div className="item-disc" key={item.name}>
            <div className="color" style={{backgroundColor: item.color}}/>
            <p className="name-precent">{item.name}: {helper(data, item.value).precent + "%"} {`(${item.value})`}</p>
          </div>
        ))}
      </div>
      <div className="controls">
        <div className="add-value col-md-3">
          <h3>Here you can add value</h3>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="name" name='name' onChange={addHendler} placeholder='Name'/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id="value" name='value' onChange={addHendler} placeholder='Value'/>
            <label htmlFor="value">Value</label>
          </div>
          <div className="form-floating mb-3">
            <input type="color" className="form-control" id="color" name='color' onChange={addHendler} placeholder='Color'/>
            <label htmlFor="color">Color</label>
          </div>
          <button type="button" className="btn btn-success" onClick={addNewItem}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default ProgrressBar
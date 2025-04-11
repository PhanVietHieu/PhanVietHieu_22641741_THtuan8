import '../css/admin.css'
import Overviewcard from './Overviewcard'
import { useEffect, useState } from 'react';

export default function Admin() {

  const [cards, setCards] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/overview")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);



  useEffect(() => {
    fetch("http://localhost:3002/orders")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <img className='logo' src="../src/img/Image 1858.png" alt="" />
          <input className='input' type="text" placeholder='Sreach' />
          <img src="../src/img/Bell 1.png" alt="" srcSet="" />
          <img src="../src/img/Question 1.png" alt="" srcSet="" />
          <img src="../src/img/Avatar (1).png" alt="" srcSet="" />

        </div>
        <div className="menu">
          <img className='logoMenu' src="../src/img/Image 1858.png" alt="" />

          <a href="#">Dashboard</a>
          <a href="#">Projects</a>
          <a href="#">Teams</a>
          <a href="#">Analytics</a>
          <a href="#">Messages</a>
          <a href="#">Integrations</a>
        </div>
        <div className="content">
          <div className="secA">
            <h2 className="overview-title">
              <span className="icon-square">▧</span> Overview
            </h2>
            <div className="overview-row">
              {cards.map((card) => (
                <div key={card.id} className="card-box">
                  <div className="card-title">{card.title}</div>
                  <div className="card-value">{card.value}</div>
                  <div className="card-change">
                    ▲ {card.change} <span className="card-subtext">period of change</span>
                  </div>
                  <div className="card-icon">{card.icon}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="secB">
            <div className="report-header">
              <h3>
                <i className="fas fa-file-alt report-icon"></i> Detailed report
              </h3>
              <div className="report-actions">
                <button className="btn btn-outline">📥 Import</button>
                <button className="btn btn-outline">📤 Export</button>
              </div>
            </div>
            <table className="report-table">
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>CUSTOMER NAME</th>
                  <th>COMPANY</th>
                  <th>ORDER VALUE</th>
                  <th>ORDER DATE</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td className="customer">
                      <img src={order.avatar} alt="" />
                      <span>{order.name}</span>
                    </td>
                    <td>{order.company}</td>
                    <td>${order.value}</td>
                    <td>{order.date}</td>
                    <td>
                      <span className={`status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td><i className="fa fa-pencil-alt"></i></td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
        <div className="footer">
          <h4>Footer</h4>
        </div>
      </div>
    </>
  )

}
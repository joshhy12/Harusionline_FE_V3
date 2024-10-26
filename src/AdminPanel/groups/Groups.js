import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Groups.css';

function Groups() {
  const data = [
    { title: "Familia", description: "Kikundi cha wanafamilia wa karibu" },
    { title: "Marafiki", description: "Marafiki wa karibu wa maharusi/wazazi" },
    { title: "Majirani", description: "" },
    { title: "Ndugu", description: "Marafiki mliosoma pamoja" },
    { title: "School-Mates", description: "Marafiki mliosoma pamoja" },
    { title: "Kamati", description: "Kikundi cha wanakamati" },
    { title: "School-Mates-Primary", description: "Marafiki na mliosoma nao shule ya msingi" },
    { title: "School-Mates-Secondary", description: "Marafiki na mliosoma nao shule ya sekondari" },
    { title: "School-Mates-Chuo", description: "" }
  ];

  const TableRow = ({ title, description }) => (
    <tr>
      <td className="group-cell">
        <i className="fas fa-chevron-right group-icon"></i>
      </td>
      <td className="group-cell">{title}</td>
      <td className="group-cell">{description}</td>
      <td className="group-cell">
        <i className="fas fa-user-friends group-icon-action"></i>
        <i className="fas fa-trash-alt group-icon-action"></i>
      </td>
    </tr>
  );

  return (
    <div className="group-container">
            <h2 className="text-center" style={{ color: '#24366b' }}>Makundi Ya Wageni</h2>
            <div className="group-table-wrapper">
        <table className="group-table">
          <thead className="group-thead">
            <tr>
              <th className="group-header">Expand Group</th>
              <th className="group-header">Group Title</th>
              <th className="group-header">Description</th>
              <th className="group-header">Action</th>
            </tr>
          </thead>
          <tbody className="group-tbody">
            {data.map((item, index) => (
              <TableRow key={index} title={item.title} description={item.description} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="group-pagination">
        <div className="group-rows-per-page">Rows per page: <span>10</span></div>
        <div className="group-page-info">1-9 of 9</div>
        <div className="group-navigation">
          <i className="fas fa-chevron-left group-nav-icon"></i>
          <i className="fas fa-chevron-right group-nav-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Groups;

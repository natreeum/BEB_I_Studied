const e = require('express');
const flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: (req, res) => {
    // TODO:
    console.log(req.query);
    let newquery = req.query;
    let filteredarray = [...flights];
    if (newquery.departure)
      filteredarray = filteredarray.filter(
        (e) => e.departure === newquery.departure
      );
    if (newquery.destination)
      filteredarray = filteredarray.filter(
        (e) => e.destination === newquery.destination
      );
    if (newquery.departure_times)
      filteredarray = filteredarray.filter(
        (e) => e.departure_times === newquery.departure_times
      );
    if (newquery.arrival_times)
      filteredarray = filteredarray.filter(
        (e) => e.arrival_times === newquery.arrival_times
      );
    return res.json(filteredarray);
  },
  // [GET] /flight/:id
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    // TODO:
    let fightfindid = flights.filter((e) => e.uuid === req.params.id);
    return res.json(fightfindid);
  },

  // [PUT] /flight/:id 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    let data;
    // TODO:
    let bodydata = req.body;
    let flightid = req.params.id;
    data = flights.filter((e) => e.uuid === flightid)[0];
    if (bodydata.departure) data.departure = bodydata.departure;
    if (bodydata.destination) data.destination = bodydata.destination;
    if (bodydata.departure_times)
      data.departure_times = bodydata.departure_times;
    if (bodydata.arrival_times) data.arrival_times = bodydata.arrival_times;
    return res.status(200).json(data);
  },
};

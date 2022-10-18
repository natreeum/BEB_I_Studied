const e = require('express');
const flights = require('../repository/flightList');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 데이터 혹은 요청 된 flight_uuid, phone 값과 동일한 예약 데이터를 조회합니다.
  findById: (req, res) => {
    // TODO:
    let bookquery = req.query;
    let result = [...booking];
    if (bookquery.flight_uuid) {
      result = result.filter((e) => e.flight_uuid === bookquery.flight_uuid);
      return res.status(200).json(result);
    }
    if (bookquery.phone) {
      result = result.filter((e) => e.phone === bookquery.phone);
      return res.status(200).json(...result);
    }
    return res.status(200).json(result);
  },

  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  // 응답으로는 book_id를 리턴합니다.
  // Location Header로 예약 아이디를 함께 보내준다면 RESTful한 응답에 더욱 적합합니다.
  // 참고 링크: https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api#useful-post-responses
  create: (req, res) => {
    // TODO:
    let newdata = req.body;
    let bookinfo = {
      flight_uuid: newdata.flight_uuid,
      name: newdata.name,
      phone: newdata.phone,
    };
    booking.push(bookinfo);
    return res.status(201).json(booking);
  },

  // [DELETE] /book?phone={phone} 요청을 수행합니다.
  // 요청 된 phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteById: (req, res) => {
    // TODO:
    let delquery = req.query;
    booking = booking.filter((e) => delquery.phone !== e.phone);
    return res.status(200).json(booking);
  },
};
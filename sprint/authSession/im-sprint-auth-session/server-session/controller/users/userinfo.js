const { Users } = require('../../models');

module.exports = {
  get: (req, res) => {
    // TODO: 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현하세요.
    // HINT: 세션 객체에 담긴 정보가 궁금하다면 req.session을 콘솔로 출력해보세요

    if (!req.session.user) {
      // your code here
      res.status(400).send({ message: 'not authorized' });
    } else {
      // your code here
      // TODO: 세션 객체에 저장되어 있는 사용자 정보를 반환합니다.
      res
        .status(200)
        .send({ data: { userInfo: req.session.user }, message: 'ok' });
    }
  },
};
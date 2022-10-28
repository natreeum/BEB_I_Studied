const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  // console.log(`a : ${req.header('authorization')}`);
  const headerAuthorization = req.header('authorization');
  if (!headerAuthorization) {
    res.status(400).send({ data: null, message: 'invalid access token' });
  } else {
    let decoded;
    try {
      decoded = jwt.verify(
        headerAuthorization.split(' ')[1],
        process.env.ACCESS_SECRET
      );
    } catch (e) {
      console.log(e);
    }
    delete decoded.iat;
    res.status(200).send({
      data: {
        userInfo: decoded,
      },
      message: 'ok',
    });
  }
};

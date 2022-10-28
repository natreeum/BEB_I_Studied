const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  // TODO: urclass의 가이드를 참고하여 POST /login 구현에 필요한 로직을 작성하세요.
  // HINT: auth-session과 마찬가지로, sequelize를 사용해 DB를 조회하세요.

  const data = await Users.findOne({
    where: { userId: req.body.userId, password: req.body.password },
  });

  if (!data) {
    res.status(401).send({ message: 'not authorized' });
  } else {
    delete data.dataValues.password;
    const accessToken = jwt.sign(data.dataValues, process.env.ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(data.dataValues, process.env.REFRESH_SECRET, {
      expiresIn: '60m',
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 1000000,
    });
    res.status(200).json({ data: { accessToken }, message: 'ok' });
  }
};

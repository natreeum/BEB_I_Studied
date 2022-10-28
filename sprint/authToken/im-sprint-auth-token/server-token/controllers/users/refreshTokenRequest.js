const { Users } = require('../../models');
const jwd = require('jsonwebtoken');
module.exports = (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /refreshtokenrequest 구현에 필요한 로직을 작성하세요.
  console.log(req.cookies.refreshToken);
  const refreshTokenAtCookie = req.cookies.refreshToken;
  let refreshTokenData;
  try {
    refreshTokenData = jwd.verify(
      refreshTokenAtCookie,
      process.env.REFRESH_SECRET
    );
  } catch (e) {
    refreshTokenData = 'error';
  }
  if (!refreshTokenAtCookie) {
    res.status(400).send({ data: null, message: 'refresh token not provided' });
  } else if (refreshTokenData === 'error') {
    res.status(400).send({
      data: null,
      message: 'invalid refresh token, please log in again',
    });
  } else {
    console.log(refreshTokenData);
    const accessToken = 'a';
    const userInfo = {
      id: refreshTokenData.id,
      userId: refreshTokenData.userId,
      email: refreshTokenData.email,
      createdAt: refreshTokenData.createdAt,
      updatedAt: refreshTokenData.updatedAt,
    };
    res.status(200).send({ data: { accessToken, userInfo }, message: 'ok' });
  }
};

// 해당 모델의 인스턴스를 models/index.js에서 가져옵니다.
const { Users } = require('../../models');

module.exports = {
  post: async (req, res) => {
    // userInfo는 유저정보가 데이터베이스에 존재하고, 완벽히 일치하는 경우에만 데이터가 존재합니다.
    // 만약 userInfo가 NULL 혹은 빈 객체라면 전달받은 유저정보가 데이터베이스에 존재하는지 확인해 보세요
    const userInfo = await Users.findOne({
      where: { userId: req.body.userId, password: req.body.password },
    });
    // TODO: userInfo 결과 존재 여부에 따라 응답을 구현하세요.
    // 결과가 존재하는 경우 세션 객체에 password를 제외한 유저 정보가 저장되어야 합니다.
    if (!userInfo) {
      // your code here
      res.status(401).send({ message: 'not authorized' });
    } else {
      // your code here
      // HINT: req.session을 사용하세요.
      delete userInfo.dataValues.password;
      req.session.save(function () {
        req.session.user = userInfo;
        res.json({ data: userInfo, message: 'ok' });
        // session saved
      });
    }
  },
};

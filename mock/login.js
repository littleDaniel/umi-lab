export default {
  "post /api/login"(req, res, next) {
    const { username, password } = req.body;
    console.log(username, password);
    if (username == "LD" && password == "123") {
      return res.json({
        code: 0,
        data: {
          access_token: "LDisgood",
          refresh_token: "LDisverygood",
          expires_in: 123456
        }
      });
    }
    return res.status(401).json({
      code: -1,
      msg: "密码错误"
    });
  }
};

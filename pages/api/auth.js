export default function handler(req, res) {
    const { password } = req.query;
    const correctPassword = "666"; // 正确的口令
  
    if (password === correctPassword) {
      res.status(200).json({ message: "口令正确" });
    } else {
      res.status(401).json({ error: "口令错误" });
    }
  }
  
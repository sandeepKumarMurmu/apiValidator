module.exports = async (req, res) => {
  try {
    return res.json({ message: "your are connected" });
  } catch (e) {
    return res.json({ e });
  }
};

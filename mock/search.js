export default {
  "GET /api/getLists": {
    lists: ["a", "b", "c"]
  },
  "GET /api/getListsAsync": (req, res) => {
    // console.log("req in mock->", req);

    // res.json({
    //   lists: "res" + req.query.value
    // })

    // ↓ mock api中支持异步
    setTimeout(() => {
      res.json({
        lists: "res" + req.query.value
      })
    }, 800)
  }
}
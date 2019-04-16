exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: 'Hello, World! ' + Math.round(Math.random() * 10)
    }),
  })
}
// async function hello() {
//   return Promise.resolve("Hello, World");
// }

// exports.handler = async function(event, context) {
//   try {
//     const body = await hello();
//     return { statusCode: 200, body };
//   } catch (err) {
//     return { statusCode: 500, body: err.toString() };
//   }
// };

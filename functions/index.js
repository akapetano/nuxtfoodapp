exports.handler = async (event, context) => {
  return await {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi there Tacos',
      event,
    }),
  }
}

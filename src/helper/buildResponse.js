function buildResponse(res, status, body) {
  res.status(status).body(body);
}

module.exports = { buildResponse };

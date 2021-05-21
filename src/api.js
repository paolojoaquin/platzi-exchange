const API = 'https://api.coincap.io/v2'

function getAssets() {
  return fetch(`${API}/assets?limit=20`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      return res.data
    })
}

function getAsset(coinId) {
  return fetch(`${API}/assets/${coinId}`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      return res.data
    })
}

function getAssetHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()
  return fetch(
    `${API}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      return res.data
    })
}

function getMarkets(coin) {
  return fetch(`${API}/assets/${coin}/markets?limit=5`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      return res.data
    })
}

function getExchange(id) {
  return fetch(`${API}/exchanges/${id}`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      return res.data
    })
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
}

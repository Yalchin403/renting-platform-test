async function getBnbPrice() {
  const url = "https://api.binance.com/api/v3/ticker/price";
  const params = new URLSearchParams({ symbol: "BNBUSDT" });

  try {
    const response = await fetch(`${url}?${params}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return parseFloat(data.price);
  } catch (error) {
    console.error("Error fetching BNB price:", error);
    return null;
  }
}

module.exports = { getBnbPrice };

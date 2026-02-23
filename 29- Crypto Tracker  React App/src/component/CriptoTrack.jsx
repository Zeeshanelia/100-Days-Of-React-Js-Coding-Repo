import { useEffect, useState } from "react";

const CriptoTrack = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); // search state

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&order=market_cap_desc&per_page=50&page=1&sparkline=false"
        );

        if (!response.ok) throw new Error(`API Error: ${response.status}`);

        const data = await response.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
  }, []);

  // Filter coins based on search input
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-black w-full overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Top Cryptos (PKR)</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or symbol..."
        className="mb-4 p-2 border border-gray-300 rounded w-full max-w-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Coin</th>
              <th className="py-2 px-4 border-b">Price (₨)</th>
              <th className="py-2 px-4 border-b">24h Change (%)</th>
              <th className="py-2 px-4 border-b">Total Volume</th>
              <th className="py-2 px-4 border-b">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.length > 0 ? (
              filteredCoins.map((coin) => (
                <tr key={coin.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 flex items-center gap-2">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                    <span>
                      {coin.name} ({coin.symbol.toUpperCase()})
                    </span>
                  </td>
                  <td className="py-2 px-4">₨{coin.current_price.toLocaleString()}</td>
                  <td
                    className={`py-2 px-4 ${
                      coin.price_change_percentage_24h >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td className="py-2 px-4">₨{coin.total_volume.toLocaleString()}</td>
                  <td className="py-2 px-4">₨{coin.market_cap.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No coins found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CriptoTrack;

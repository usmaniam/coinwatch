import CoinSearch from "../components/CoinSearch"
import Trending from "../components/Trending"

const Home = ({coins}) => {
    return (
      <div>
        <div className="">
        <h1 className="text-2xl text-center font-bold mt-8">
          <span className="text-accent">Nigeria's</span> One-stop Shop for <span className="text-accent">Crypto</span> Market Data
        </h1>
        <p className="text-center text-primary font-medium my-2 mx-2">View top cryptocurrency prices, market cap and trading volume. Discover new and trending coins. All in one place.</p>
        </div>
        <CoinSearch coins={coins}  />
        <Trending />
      </div>
    )
  }
  
export default Home
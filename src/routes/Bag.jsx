import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import Massege from "../components/Massege";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const foundItmes = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        {foundItmes.length == 0 ? (
          <Massege />
        ) : (
          <div className="bag-page">
            <div className="bag-items-container">
              {foundItmes.map((item) => (
                <BagItem item={item} />
              ))}
            </div>

            <BagSummary />
          </div>
        )}
      </main>
    </>
  );
};

export default Bag;

import { Link } from "react-router-dom";

const PendingTable = ({item}) => {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("assets/img/userflow", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <tr>
      <td className="main-image">
        <Link to="/admin/nftsdetail">
          <ul className="d-flex justify-content-start align-items-center">
            <li>
              <img
                width={70}
                width={70}
                // src={`${images["user2.svg"]["default"]}`}
                src={item?.collection?.image}
                className="pr-2 imgages-no"
                alt=""
              />
            </li>
            <li className="darkgray">{item?.collection?.name}</li>
          </ul>
        </Link>
      </td>
      <td className="grey">
        <ul className="d-flex justify-content-start align-items-center">
          <li>
            <img
              width={60}
              // src={`${images["user2.svg"]["default"]}`}
              src={item?.creator?.picture}
              // src={`${images["user2.png"]["default"]}`}
              className="pr-2 rounded-full imgages-no"
              alt=""
            />
          </li>
          <li className="grey">Ramon Miller</li>
        </ul>
      </td>
      <td className="grey">{item?.royaltiesAmount} ETH</td>
      <td className="grey">2</td>
    </tr>
  );
};

export default PendingTable;

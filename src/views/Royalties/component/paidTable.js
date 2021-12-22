import { Link } from "react-router-dom";

const PaidTable = () => {
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
        <Link to="/admin/artistdetail">
          <ul className="d-flex justify-content-start align-items-center">
            <li>
              <img
                src={`${images["user2.svg"]["default"]}`}
                className="pr-2 imgages-no"
                alt=""
              />
            </li>
            <li className="darkgray">fast food</li>
          </ul>
        </Link>
      </td>
      <td className="grey">
        <ul className="d-flex justify-content-start align-items-center">
          <li>
            <img
              src={`${images["user2.png"]["default"]}`}
              className="pr-2 imgages-no"
              alt=""
            />
          </li>
          <li className="grey">Ramon Miller</li>
        </ul>
      </td>
      <td className="grey">0.02 ETH</td>
      <td className="grey">2</td>
    </tr>
  );
};

export default PaidTable;

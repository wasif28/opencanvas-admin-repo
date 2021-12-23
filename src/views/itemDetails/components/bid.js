const Bid = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("assets/img", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <tr className="" style={{ borderBottom: "1px solid #E2E8F0" }}>
      <td className="d-flex align-items-center pb-2">
        <img
          width={40}
          height={40}
          className="rounded-full"
          src={`${images["Vector123.png"]["default"]}`}
          alt=""
        />
        <div className="pl-3">
          <div className="d-flex justify-content-center">
            <p className="p-0 table-title">Jenny Wilson</p>
            <p className="p-0 pl-2">placed a bid</p>
          </div>
          <p className="p-0">2 hours ago</p>
        </div>
      </td>
      <td className="pb-2">
        <div className="d-flex justify-content-end align-items-center">
          <img
            width={22}
            height={22}
            className="rounded-full"
            src={`${images["eth.svg"]["default"]}`}
            alt=""
          />
          <p
            className="p-0 pl-1 td-title"
            style={{ fontWeight: 600, color: "#0F172A" }}
          >
            0.018 ETH
          </p>
          <p className="p-0 pl-2">≈$56.85</p>
        </div>
      </td>
    </tr>
  );
};

export default Bid;

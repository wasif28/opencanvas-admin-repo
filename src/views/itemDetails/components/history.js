const History = () => {
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
            <div className="d-flex justify-content-start">
              <p className="p-0 table-title" style={{color:'#475569'}}>Bid <span style={{fontWeight: '600', color:'#0F172A'}}>1.1 ETH</span></p>
            </div>
            <p className="p-0">by <span style={{fontWeight: '400', color:'#0F172A'}}>Peggy Riley </span>2 hours ago</p>
          </div>
        </td>
      </tr>
    );
  };
  
  export default History;  
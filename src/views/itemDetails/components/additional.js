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

  const dummArr = [
    { title: "Background", subtitle: "Blue", text: "9% have this trait" },
    { title: "Body", subtitle: "Spotty Fur", text: "10% have this trait" },
    { title: "Body Grade", subtitle: "3D Glass", text: "6% have this trait" },
    { title: "Eyes", subtitle: "Spooky", text: "8% have this trait" },
    { title: "Eye Grade", subtitle: "Rotten", text: "9% have this trait" },
    { title: "Head", subtitle: "High Slick", text: "5% have this trait" },
    { title: "Head Grade", subtitle: "Fresh", text: "11% have this trait" },
    { title: "Mouth", subtitle: "MO", text: "11% have this trait" },
    { title: "Mouth Grade", subtitle: "Rotten", text: "12% have this trait" },
    { title: "Nose", subtitle: "Nose Ring", text: "5% have this trait" },
    { title: "Nose Grade", subtitle: "Fresh", text: "11% have this trait" },
  ];

  return (
    <div className="additional">
      {dummArr.map((item, index) => {
        return (
          <div key={index} className="additional-child">
            <p className="title pb-2">{item.title}</p>
            <p className="title-sub">{item.subtitle}</p>
            <p className="add-text">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default History;

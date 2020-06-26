const fs = require("fs");

exports.getCoordinates = (req, res) => {
  const h = req.params.height;
  const e = req.params.res;
  let cor_array = [h];

  //   const total_distance = h * ((1 + e ** 2) / (1 - e ** 2));

  //read from db
  let rawdata = fs.readFileSync("db.json");
  if (rawdata){
    let rawdata = fs.readFileSync("db.json");
    let data = JSON.parse(rawdata);
    for (var row of data["data"]) {
      if (row["h"] == h && row["e"] == e) {
        cor_array = row["cor_arr"];
      } else {
        i = 1;
        hn = e ** 2 * h;

        while (hn != 0) {
          cor_array.push(hn);
          i++;
          hn = e ** (i * 2) * h;
        }

        //   console.log(cor_array);
        data.data.push(cor_array);

        //write to file
        try {
          fs.writeFileSync("db.json", JSON.stringify(data));
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  else{
    i = 1;
    hn = e ** 2 * h;

    while (hn != 0) {
      cor_array.push(hn);
      i++;
      hn = e ** (i * 2) * h;
    }

    //   console.log(cor_array);
    data.data.push(cor_array);

    //write to file
    try {
      fs.writeFileSync("db.json", JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  }

  console.log(cor_array);
};

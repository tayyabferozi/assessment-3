const Product = require("../models/product");

exports.getAllProducts = async (req, res) => {
  try {
    let foundProducts = await Product.find();

    res.send(foundProducts);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Something went wrong, please try again later" });
  }
};

exports.bulkCreate = (req, res) => {
  let products = [
    {
      name: "Londyn Shawl Collar Coat",
      price: 199,
      imgs: [
        { hex: "#A46A48", src: "londyn-showl-peach.jpg" },
        { hex: "#000", src: "londyn-showl-black.jpg" },
        { hex: "#CFC9BB", src: "londyn-showl-beige.jpg" },
        { hex: "#705549", src: "londyn-showl-brown.jpg" },
        { hex: "#C89F9B", src: "londyn-showl-pink.jpg" },
      ],
      description:
        "Take a nap or buy a coat in cold weather! This season we provide the highest quality coat to keep you warm. The Londyn Shawl Collar Coat is inherently functional and stylish sophisticated with its rich wool. Featuring double-face wool, sleeve tie detail, roomy patch pockets, and midi length. A classic style with a modern fit. -Unlined -Relaxed and tailored silhouette -Rounded shawl collar",
      fastShipping: true,
      isNewProd: true,
    },
    {
      name: "Belted Wrap Wool-Cashmere Coat",
      price: 299,
      imgs: [
        { hex: "#C8AC98", src: "shawl-collar-belted-camel.jpeg" },
        { hex: "#9099A4", src: "shawl-collar-belted-grey.jpeg" },
        { hex: "#203354", src: "shawl-collar-belted-blue.jpeg" },
      ],
      description:
        "Do you know that coat you can always rely on? You can’t go wrong with this NAP Belted Wool-Cashmere Wrap Coat, its oversized silhouette with drape shoulder. Once you tied up the waist, the coat will show off laid-back. Try styling it with coordinating colors for a considered result. -Unlined-Waist tie detail -Double-faced cashmere blend",
      fastShipping: true,
      isNewProd: true,
    },
    {
      name: "Long Belted Wool-Cashmere Wrap Coat",
      price: 269,
      imgs: [
        { hex: "#0A1123", src: "long-belted-cashmere-coat-blue-night.jpg" },
        { hex: "#000", src: "long-belted-cashmere-coat-black.jpg" },
        { hex: "#CAAE98", src: "long-belted-cashmere-coat-camel.jpg" },
      ],
      description:
        "Do you know that coat you can always rely on? You can’t go wrong with this NAP Long Belted Wool-Cashmere Wrap Coat, its oversized silhouette with exaggerated drape shoulder. Once you tied up the waist, the coat will show off laid-back. Try styling it with coordinating colors for a considered result. -Side slip pockets -Unlined -Waist tie detail -Double-faced wool blend",
      fastShipping: true,
      isNewProd: true,
    },
    {
      name: "Open Front Knit Yak-Wool Coat",
      price: 239,
      imgs: [
        { hex: "#F0DBC8", src: "open-front-knit-yak-flesh.jpg" },
        { hex: "#88695A", src: "open-front-knit-yak-brown.jpg" },
      ],
      description:
        "The Long Knit Yak-Wool Coat is beyond basics. Featuring a slim fit, notched lapels, and duo patch pockets, it can be worn outdoors or at home, giving you warmth and comfort all day. -Slightly slouchy -Maxi length",
      fastShipping: true,
      isNewProd: true,
    },
    {
      name: "Double Breasted Wool Peacoat",
      price: 299,
      imgs: [
        { hex: "#989895", src: "double-breasted-fog.jpg" },
        { hex: "#000", src: "double-breasted-black.jpg" },
        { hex: "#D7A450", src: "double-breasted-yellow-gold.jpg" },
      ],
      description:
        "Discover a new silhouette to keep you cozy from The Mia Long Scarf Wool Coat. This long coat is made from double-faced wool, features a maxi length, low pockets, belted attached, and straight cut. A functional and stylish staple. It is everything you could hope for in an overcoat. -Relaxed and modern silhouette -Crew collar with matching scarf -Straight and long fit",
      fastShipping: true,
      isNewProd: true,
    },
    {
      name: "Oversized Brushed Wool-Cashmere Coat",
      price: 199,
      imgs: [
        { hex: "#000", src: "cape-shape-cashmere-coat-black.jpg" },
        { hex: "#5B5A60", src: "cape-shape-cashmere-coat-dark-grey.jpg" },
      ],
      description:
        "This wrap features a coat wide notch lapels, long sleeves, side pockets and cinches the waist by knotting the tie belt. The seam detail displays a more stylish style. A classic design never outmoded. -Robe coat -Lapel collar",
      fastShipping: true,
      isNewProd: true,
    },
    {
      name: "Alexa Peaked Lapel Coat",
      price: 139,
      imgs: [
        { hex: "#A46A48", src: "alexa-peaked-lapel-coat-peach.jpg" },
        { hex: "#BEB3A3", src: "alexa-peaked-lapel-coat-bone.jpg" },
      ],
      description:
        "Short Double-Breasted Wool Coat keeps a minimalist aesthetic in a 100% wool construction. Focus on timeless design is evident through the classic silhouette, which boasts a wide notch lapel and patch pockets, double-breasted finish. -Double-breasted -Patch pocket -Notch lapel",
      fastShipping: true,
      isNewProd: true,
    },
    {
      name: "Sara Double Face Wool Wrap Coat",
      price: 199,
      imgs: [
        { hex: "#000", src: "sara-double-face-wool-wrap-coat-black.jpg" },
        { hex: "#A46A48", src: "sara-double-face-wool-wrap-coat-bone.jpg" },
        { hex: "#CAAE98", src: "sara-double-face-wool-wrap-coat-camel.jpg" },
      ],
      description:
        "Take a nap or buy a coat in cold weather! This season we provide the highest quality coat to keep you warm. The Emery Draped Wool Coat is inherently functional and stylish sophisticated with its rich wool. Featuring a ball double-face wool, waist tie detail, and midi length. Add the clean and no-frills staple into your closet. -Unlined -Casual and tailored silhouette -Notched lapels",
      fastShipping: true,
      isNewProd: true,
    },
  ];

  Product.deleteMany()
    .then(() => {
      Product.collection.insert(products, (err, docs) => {
        if (err) {
          console.log(err);
          res.json({ msg: "Something went wrong" });
        } else {
          console.log(docs);
          res.json({ msg: "Successfully initialized all the products" });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Something went wrong" });
    });
};

exports.deleteAll = (req, res) => {
  Product.deleteMany()
    .then(() => {
      res.json({ msg: "Deleted all successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Something went wrong" });
    });
};

exports.getProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((foundProduct) => {
      if (!foundProduct) {
        return res.status(404).json({ msg: "Product not found" });
      }

      res.json({ product: foundProduct });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Something went wrong" });
    });
};

exports.editProduct = (req, res) => {
  const { id } = req.params;

  const { name, price, description } = req.body;

  Product.findByIdAndUpdate(id, { name, price, description })
    .then((updatedProduct) => {
      res.json({
        msg: "Product updated successfully",
        product: updatedProduct,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Something went wrong" });
    });
};

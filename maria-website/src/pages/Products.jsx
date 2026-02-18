// import { DirectOphthalmoscope } from "../components/DirectOphthalmoscope";

// export function Products() {
//   const products = [
//     {
//       name: "HEINE BETA 200 LED Ophthalmoscope",
//       poster:
//         "https://www.heine.com/fileadmin/_processed_/f/6/csm_C-011.28.388-HEINE-ophthalmoscope-BETA200-diagnostic-kit-additional_ac49bb3714.png",
//       price: 50_000,
//       details: "Ophthalmoscope with outstanding durability.",
//     },
//     {
//       name: "HEINE BETA 200S LED Ophthalmoscope",
//       poster:
//         "https://www.heine.com/fileadmin/data/Images/C-261.10.118-HEINE-BETA200S-LED-ophthalmoscope-set-battery-handle-2.png",
//       price: 50_000,
//       details:
//         "Ophthalmoscope with outstanding durability – perfect for small pupils",
//     },
//     {
//       name: "HEINE BETA X Ophthalmoscope",
//       poster:
//         "https://www.heine.com/fileadmin/_processed_/6/2/csm_C-130.28.330-HEINE-BETA-X-ophthalmoscope_8fda1dca44.png",
//       price: 50_000,
//       details: "Our most advanced direct ophthalmoscope",
//     },
//     {
//       name: "HEINE K180 LED Ophthalmoscope",
//       poster:
//         "https://www.heine.com/fileadmin/_processed_/3/9/csm_C-182.10.118-HEINE-ophthalmoscope-K180-LED_e9be3370c8.png",
//       price: 50_000,
//       details: "Standard instrument for a smaller budget",
//     },
//     {
//       name: "HEINE mini 3000 LED Ophthalmoscope",
//       poster:
//         "https://www.heine.com/fileadmin/data/Images/D-008.71.120-HEINE-mini3000-LED-ophthalmoscope-battery-handle.png",
//       price: 50_000,
//       details: "Maximum quality with minimum dimensions",
//     },
//     {
//       name: "HEINE BETA 200 LED Retinoscope",
//       poster:
//         "https://www.heine.com/fileadmin/data/Images/C-014.10.118-HEINE-Retinoscope-BETA200-Diagnostic-Kit-main.png",
//       price: 50_000,
//       details: "For easy and quick observation of the fundus reflex",
//     },
//     {
//       name: "HEINE OMEGA 500 LED Binocular Indirect Ophthalmoscope",
//       poster:
//         "https://www.heine.com/fileadmin/data/Images/C-008.33.535-HEINE-IndirectOphthalmoscope-OMEGA500-additional.png",
//       price: 1_00_000,
//       details: "Quality with LED illumination",
//     },
//     {
//       name: "HEINE OMEGA 500 LED with DV1 Digital Video Camera",
//       poster:
//         "https://www.heine.com/fileadmin/data/Images/C-008-33.560-HEINE-IndirectOphthalmoscope-OMEGA500DV1-additional.png",
//       price: 1_50_000,
//       details:
//         "High-resolution digital imaging of the fundus with LED HQ illumination",
//     },
//     {
//       name: "HEINE OMEGA 600 Indirect Ophthalmoscope",
//       poster:
//         "https://www.heine.com/fileadmin/data/Images/C-008.33.610-HEINE-IndirectOphthalmoscope-OMEGA600-additional.png",
//       price: 1_00_000,
//       details: "Discover more. With less weight.",
//     },
//     {
//       name: "HEINE SIGMA 250 Binocular Indirect Ophthalmoscope",
//       poster:
//         "https://www.heine.com/fileadmin/data/Images/C-008.33.340-HEINE-IndirectOphthalmoscope-SIGMA250-additional.png",
//       price: 1_50_000,
//       details: "Accurate diagnosis made easy",
//     },
//     {
//       name: "WELCH ALLYN 3.5 V Coaxial Ophthalmoscope",
//       poster:
//         "https://assets.hillrom.com/is/image/hillrom/11720_CoaxialOphth?$pdpImage$",
//       price: 50_000,
//       details: "Patented coaxial optics with long-lasting LED illumination.",
//     },
//     {
//       name: "WELCH ALLYN ELITE Retinoscope",
//       poster:
//         "https://assets.hillrom.com/is/image/hillrom/071900002LithIonPwrHan?$pdpImage$",
//       price: 50_000,
//       details: "A compact design with convenient, user-friendly features.",
//     },
//     {
//       name: "Keeler Vantage Plus Digital BIO",
//       poster:
//         "https://www.keelerglobal.com/wp-content/uploads/2024/08/Untitled-design-1.png",
//       price: 1_00_000,
//       details:
//         "High-quality imaging is crucial for accurate documentation and teaching.",
//     },
//     {
//       name: "Keeler Vantage Plus LED binocular indirect ophthalmoscope",
//       poster:
//         "https://www.keelerglobal.com/wp-content/uploads/2024/02/vantage-768x725.webp",
//       price: 1_50_000,
//       details: "Exceptional retinal views with ultimate comfort",
//     },
//     {
//       name: "ZEISS SL 800 Slit lamp",
//       poster:
//         "https://www.zeiss.com/content/dam/med-hcp/reference-master/product-portfolio/essential-line-basic-diagostics/images/zeiss_sl_800.jpg/_jcr_content/renditions/original.image_file.1024.1024.459,181,1586,1308.file/zeiss_sl_800.jpg",
//       price: 3_50_000,
//       details: "Premium optical quality with a high level of comfort",
//     },
//     {
//       name: "Volk 90D Lens",
//       poster:
//         "data:image/jpeg;base64,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8NM121WXBj5iT4wCjPmY+g4v7S6da0WtBhUAVR7BRgDn6TE7D7Fo0lS00JtRRjqSx+rMeSefWbCQcREQEREBERAREQEREDmIiAmt7d7C02rqarUVK6NjrkEY6FWGCCPoZsogVV3h+DqO11mlv2NbjyWVqUUDHlr2Bdg8qAcHAXHrIR2h8O+1KXr/AEHjVUgMADvRmDsSPCUsfNuBOQMgEfSejIl0eTbNFdVUwtquV3KoviI64BDqUKY+dyByR+r67ueUxcU0wuVa3xY7lc/pDQHcqi8E7ga19RxnqZ6utqVhhgGB9CAR+Rmm1Xc/s6w5fRaYk+vgID+JAzA8+aTXuzDtBqaGXTFKkqDHBIoC1bUO7CotannI3Nn3z106JgnhfYAbO0PBOnItyUV0IRASuATu8QnIwAM8S9Lfhl2Qc/8A0irnrtssUH7wrATHPwq7L8mK7hsOUxq7/KfdfPwfqI0UZqOz2tVNPXogjaOsNqLN4HiEscljj9cuExk428YAwMHV3szPrRSiCxnSpOm0DIBQYA/RZrXoP1eOTL//APlP2X5iUvO8YbOqu8w44bzc9B19p2UfCnsdf/xi3719x/440ebXqKMKyoA4Ljo3IyVGfoAR+E6qKHc7VXc+QV2jnoR06YPH14H1nqbT/D/slOmh05x+1WH/AN/M3uj7PpqGKqq6x0wiKo/2RGjy32X3F7U1BDV6S4ZAUl08FSNu3JNm0HI64znnrkycdg/Ay5hnV6hawTnZUN7fxnCg4+hl6xIIx3e7h6DSOba6g9xO422ed8nJJX0XqflAkniICIiBxERAREQEREBERAREQOYiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP//Z",
//       price: 50_000,
//       details: "Using sitlamps",
//     },
//     {
//       name: "Volk 20D Lens",
//       poster:
//         "https://www.volk.com/cdn/shop/products/20D_ACS.png?v=1691129749&width=200",
//       price: 50_000,
//       details: "Using sitlamps",
//     },
//     // keep rest of your products here
//   ];

//   return (
//     <div className="app">
//       <h1>Our Products</h1>

//       <div className="card-grid">
//         {products.map((product) => (
//           <DirectOphthalmoscope key={product.name} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// newcode

// import { useEffect, useState } from "react";
// import { DirectOphthalmoscope } from "../components/DirectOphthalmoscope";

// export function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://6971d21f32c6bacb12c49d92.mockapi.io/products") // replace with real API
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("API Error:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//         <h2 className="loading-msg">Loading products...</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="app">
//       <h1>Our Products</h1>

//       <div className="card-grid">
//         {products.map((product) => (
//           <DirectOphthalmoscope key={product.name} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// new code

import { useEffect, useState } from "react";
import { DirectOphthalmoscope } from "../components/DirectOphthalmoscope";

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brand, setBrand] = useState("all");

  // ✅ FILTER STATES
  const [search, setSearch] = useState("");
  const [priceSort, setPriceSort] = useState("");

  useEffect(() => {
    fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  // ✅ FILTER LOGIC
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((product) => (brand === "all" ? true : product.brand === brand))
    .sort((a, b) => {
      if (priceSort === "low") return Number(a.price) - Number(b.price);
      if (priceSort === "high") return Number(b.price) - Number(a.price);
      return 0;
    });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h2 className="loading-msg">Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Our Products</h1>

      {/* ✅ FILTER SECTION */}
      <div className="filter-section">
        <div className="filter-section">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select onChange={(e) => setBrand(e.target.value)}>
            <option value="all">All Brands</option>
            <option value="heine">Heine</option>
            <option value="welchallyn">Welch Allyn</option>
            <option value="volk">Volk</option>
            <option value="keeler">Keeler</option>
            <option value="zeiss">Zeiss</option>
          </select>

          <select onChange={(e) => setPriceSort(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="card-grid">
        {filteredProducts.map((product) => (
          <DirectOphthalmoscope key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

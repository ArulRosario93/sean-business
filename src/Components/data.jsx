
import React from "react";

const data = [
    {
        title: "Golden Oversized",
        finalPrice: "2,999",
        secondaryPrice: "3,999",
        discount: "25%",
        images: [
            "https://media.boohoo.com/i/boohoo/bmm72697_red_xl_2/male-red-oversized-boxy-all-over-heart-applique-hoodie",
            "https://media.boohoo.com/i/boohoo/bmm72697_red_xl?$product_image_main_mobile$&fmt=webp",
            "https://media.boohoo.com/i/boohoo/bmm72697_red_xl_1?$product_image_main_mobile$&fmt=webp"
        ],
        color: "Red",
        colorRGB: "255, 0, 0",
        sizes: ["S", "M", "L", "XL"],
        highlights: [
            { title: "Material", value: "100% Cotton" },
            { title: "Care", value: "Machine Wash" },
            { title: "Fit", value: "Oversized" }
        ]
    },
    {
        title: "Urban Essentials Hoodie",
        finalPrice: "3,199",
        secondaryPrice: "4,599",
        discount: "30%",
        images: [
            "https://www.nuclearblast.com/cdn/shop/files/tb5939_mw1-00007_a41a578d-7b49-4720-88f8-92345f432779.jpg?v=1742493103",
            "https://www.blacktailor.store/cdn/shop/files/T5WashedBlack3_d53084cd-b80d-4384-a526-736cfac5b1f8.jpg?v=1741144306",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnzDA43y1spQ0WJQ8OWG1Hvm_rxnewNDRoS9xcpCV5uGrvKVWz_v6uoZA8grp3WaQXmA&usqp=CAU"
        ],
        color: "Charcoal",
        colorRGB: "54, 69, 79",
        sizes: ["M", "L", "XL", "XXL"],
        highlights: [
            { title: "Material", value: "80% Cotton, 20% Polyester" },
            { title: "Care", value: "Machine Wash Cold" },
            { title: "Fit", value: "Regular" }
        ]
    },
    {
        title: "Minimalist Black Tee",
        finalPrice: "1,499",
        secondaryPrice: "1,999",
        discount: "25%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz67989_black_xl_1/male-black-oversized-basic-crew-neck-t-shirt",
            "https://media.boohoo.com/i/boohoo/mzz67989_black_xl?$product_image_main_mobile$&fmt=webp",
            "https://media.boohoo.com/i/boohoo/mzz67989_black_xl_2?$product_image_main_mobile$&fmt=webp"
        ],
        color: "Black",
        colorRGB: "0, 0, 0",
        sizes: ["S", "M", "L"],
        highlights: [
            { title: "Material", value: "100% Cotton" },
            { title: "Care", value: "Hand Wash Recommended" },
            { title: "Fit", value: "Relaxed" }
        ]
    },
    {
        title: "Sky Blue Zip-Up",
        finalPrice: "2,799",
        secondaryPrice: "3,499",
        discount: "20%",
        images: [
            "https://media.boohooman.com/i/boohooman/bmm39145_light%20blue_xl?$product_image_main_mobile$&fmt=webp",
            "https://media.boohoo.com/i/boohoo/bmm17004_light%20blue_xl_3/male-light%20blue-oversized-overdye-man-signature-t-shirt",
            "https://media.boohooman.com/i/boohooman/cmm14224_sky%20blue_xl?$product_image_main_mobile$&fmt=webp"
        ],
        color: "Sky Blue",
        colorRGB: "135, 206, 235",
        sizes: ["S", "M", "L", "XL"],
        highlights: [
            { title: "Material", value: "60% Cotton, 40% Polyester" },
            { title: "Care", value: "Machine Wash Cold" },
            { title: "Fit", value: "Regular Fit" }
        ]
    },
    {
        title: "Ash Grey Joggers",
        finalPrice: "2,499",
        secondaryPrice: "3,199",
        discount: "22%",
        images: [
            "https://sfycdn.speedsize.com/c93e51c9-c4ee-4999-a19a-e064e9375152/https://www.percivalclo.com/cdn/shop/files/PERCIVAL_MENSWEAR_SUNDAY_OVERSIZED_T_CORNFLOWER_BLUE10.jpg?v=1711629033&width=514",
            "https://www.neweracap.co.uk/cdn/shop/files/60502659_6.jpg?v=1743804722&width=1946",
            "https://www.sneakerboxshop.it/wp-content/uploads/2024/04/Shop-online-Sneaker-Box-New-Era-T-Shirt-Oversize-LA-Dodgers-World-Series-Light-Blue-60502609-4.jpg"
        ],
        color: "Grey",
        colorRGB: "128, 128, 128",
        sizes: ["S", "M", "L", "XL", "XXL"],
        highlights: [
            { title: "Material", value: "100% Cotton" },
            { title: "Care", value: "Machine Wash" },
            { title: "Fit", value: "Tapered" }
        ]
    },
    {
        title: "Forest Green Hoodie",
        finalPrice: "2,899",
        secondaryPrice: "3,499",
        discount: "17%",
        images: [
            "https://hourscollection.com/cdn/shop/files/0A4A7543-Edit_800x.jpg?v=1739485867",
            "https://hourscollection.com/cdn/shop/files/0A4A7540-Edit_800x.jpg?v=1739485867",
            "https://cdnp.sanmar.com/medias/sys_master/images/images/h5a/h38/13148337307678/7451-ForestGrn-1-PC450LSForestGrnModelFront4-1200W.jpg"
        ],
        color: "Green",
        colorRGB: "34, 139, 34",
        sizes: ["M", "L", "XL"],
        highlights: [
            { title: "Material", value: "Fleece Lined Cotton" },
            { title: "Care", value: "Machine Wash Cold" },
            { title: "Fit", value: "Oversized" }
        ]
    },
    {
        title: "Classic White Tee",
        finalPrice: "999",
        secondaryPrice: "1,299",
        discount: "23%",
        images: [
            "https://fortune421.com/cdn/shop/products/m-s-classic-tee-white-model-front.jpg?v=1668208590",
            "https://assets.ajio.com/medias/sys_master/root/h16/h93/12396284805150/-473Wx593H-460270320-white-MODEL2.jpg",
            "https://ml.thcdn.com/productimg/381/533/15266860-1835180203936764.jpg"
        ],
        color: "White",
        colorRGB: "255, 255, 255",
        sizes: ["S", "M", "L", "XL"],
        highlights: [
            { title: "Material", value: "100% Organic Cotton" },
            { title: "Care", value: "Cold Wash" },
            { title: "Fit", value: "Slim" }
        ]
    },
    {
        title: "Washed Denim Jacket",
        finalPrice: "4,199",
        secondaryPrice: "5,299",
        discount: "21%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz72015_blue_xl_1",
            "https://media.boohoo.com/i/boohoo/mzz72015_blue_xl_2",
            "https://media.boohoo.com/i/boohoo/mzz72015_blue_xl"
        ],
        color: "Denim Blue",
        colorRGB: "70, 130, 180",
        sizes: ["M", "L", "XL"],
        highlights: [
            { title: "Material", value: "100% Denim" },
            { title: "Care", value: "Dry Clean Only" },
            { title: "Fit", value: "Boxy" }
        ]
    },
    {
        title: "Beige Relaxed Fit Pants",
        finalPrice: "2,199",
        secondaryPrice: "2,799",
        discount: "21%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz72245_beige_xl_1",
            "https://media.boohoo.com/i/boohoo/mzz72245_beige_xl_2",
            "https://media.boohoo.com/i/boohoo/mzz72245_beige_xl"
        ],
        color: "Beige",
        colorRGB: "245, 245, 220",
        sizes: ["S", "M", "L", "XL", "XXL"],
        highlights: [
            { title: "Material", value: "Polyester Blend" },
            { title: "Care", value: "Machine Wash Warm" },
            { title: "Fit", value: "Relaxed" }
        ]
    },
    {
        title: "Navy Everyday Shorts",
        finalPrice: "1,299",
        secondaryPrice: "1,699",
        discount: "24%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz68078_navy_xl_1",
            "https://media.boohoo.com/i/boohoo/mzz68078_navy_xl_2",
            "https://media.boohoo.com/i/boohoo/mzz68078_navy_xl"
        ],
        color: "Navy",
        colorRGB: "0, 0, 128",
        sizes: ["S", "M", "L", "XL"],
        highlights: [
            { title: "Material", value: "Jersey" },
            { title: "Care", value: "Cold Wash Only" },
            { title: "Fit", value: "Regular" }
        ]
    },
    {
        title: "Rust Brown Oversized Sweatshirt",
        finalPrice: "2,699",
        secondaryPrice: "3,299",
        discount: "18%",
        images: [
            "https://media.boohoo.com/i/boohoo/bmm72542_rust_xl_1",
            "https://media.boohoo.com/i/boohoo/bmm72542_rust_xl_2",
            "https://media.boohoo.com/i/boohoo/bmm72542_rust_xl"
        ],
        color: "Rust",
        colorRGB: "183, 65, 14",
        sizes: ["M", "L", "XL"],
        highlights: [
            { title: "Material", value: "100% Brushed Cotton" },
            { title: "Care", value: "Cold Wash Recommended" },
            { title: "Fit", value: "Oversized" }
        ]
    },
    {
        title: "Lilac Drop Shoulder Tee",
        finalPrice: "1,799",
        secondaryPrice: "2,199",
        discount: "18%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz67985_lilac_xl_1",
            "https://media.boohoo.com/i/boohoo/mzz67985_lilac_xl_2",
            "https://media.boohoo.com/i/boohoo/mzz67985_lilac_xl"
        ],
        color: "Lilac",
        colorRGB: "200, 162, 200",
        sizes: ["S", "M", "L"],
        highlights: [
            { title: "Material", value: "100% Cotton" },
            { title: "Care", value: "Machine Wash Cold" },
            { title: "Fit", value: "Drop Shoulder" }
        ]
    },
    {
        title: "Cream Ribbed Tank",
        finalPrice: "999",
        secondaryPrice: "1,499",
        discount: "33%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz68123_cream_xl_1",
            "https://media.boohoo.com/i/boohoo/mzz68123_cream_xl_2",
            "https://media.boohoo.com/i/boohoo/mzz68123_cream_xl"
        ],
        color: "Cream",
        colorRGB: "255, 253, 208",
        sizes: ["S", "M", "L", "XL"],
        highlights: [
            { title: "Material", value: "Ribbed Cotton Blend" },
            { title: "Care", value: "Gentle Cycle" },
            { title: "Fit", value: "Slim Fit" }
        ]
    },
    {
        title: "Stone Relaxed Hoodie",
        finalPrice: "3,099",
        secondaryPrice: "3,799",
        discount: "18%",
        images: [
            "https://media.boohoo.com/i/boohoo/bmm72714_stone_xl_1",
            "https://media.boohoo.com/i/boohoo/bmm72714_stone_xl_2",
            "https://media.boohoo.com/i/boohoo/bmm72714_stone_xl"
        ],
        color: "Stone",
        colorRGB: "210, 180, 140",
        sizes: ["M", "L", "XL"],
        highlights: [
            { title: "Material", value: "French Terry" },
            { title: "Care", value: "Cold Wash Only" },
            { title: "Fit", value: "Relaxed Fit" }
        ]
    },
    {
        title: "Cobalt Blue Basic Tee",
        finalPrice: "1,299",
        secondaryPrice: "1,699",
        discount: "24%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz68033_cobalt_xl_1",
            "https://media.boohoo.com/i/boohoo/mzz68033_cobalt_xl_2",
            "https://media.boohoo.com/i/boohoo/mzz68033_cobalt_xl"
        ],
        color: "Cobalt Blue",
        colorRGB: "0, 71, 171",
        sizes: ["S", "M", "L", "XL"],
        highlights: [
            { title: "Material", value: "Soft Jersey Cotton" },
            { title: "Care", value: "Machine Wash Warm" },
            { title: "Fit", value: "Regular Fit" }
        ]
    },
    {
        title: "Dusty Pink Pullover",
        finalPrice: "2,399",
        secondaryPrice: "2,999",
        discount: "20%",
        images: [
            "https://media.boohoo.com/i/boohoo/bmm72599_pink_xl_1",
            "https://media.boohoo.com/i/boohoo/bmm72599_pink_xl_2",
            "https://media.boohoo.com/i/boohoo/bmm72599_pink_xl"
        ],
        color: "Dusty Pink",
        colorRGB: "221, 160, 221",
        sizes: ["M", "L", "XL", "XXL"],
        highlights: [
            { title: "Material", value: "Brushed Cotton" },
            { title: "Care", value: "Wash Inside Out" },
            { title: "Fit", value: "Relaxed Fit" }
        ]
    },
    {
        title: "Black Slim Fit Jeans",
        finalPrice: "2,899",
        secondaryPrice: "3,599",
        discount: "19%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz72200_black_xl_1",
            "https://media.boohoo.com/i/boohoo/mzz72200_black_xl_2",
            "https://media.boohoo.com/i/boohoo/mzz72200_black_xl"
        ],
        color: "Black",
        colorRGB: "0, 0, 0",
        sizes: ["30", "32", "34", "36"],
        highlights: [
            { title: "Material", value: "Stretch Denim" },
            { title: "Care", value: "Cold Wash Only" },
            { title: "Fit", value: "Slim" }
        ]
    },
    {
        title: "Olive Utility Shirt",
        finalPrice: "2,599",
        secondaryPrice: "3,299",
        discount: "21%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz72113_olive_xl_1",
            "https://media.boohoo.com/i/boohoo/mzz72113_olive_xl_2",
            "https://media.boohoo.com/i/boohoo/mzz72113_olive_xl"
        ],
        color: "Olive",
        colorRGB: "107, 142, 35",
        sizes: ["S", "M", "L", "XL"],
        highlights: [
            { title: "Material", value: "Twill Cotton" },
            { title: "Care", value: "Machine Wash" },
            { title: "Fit", value: "Boxy" }
        ]
    },
    {
        title: "Tan Oversized Shacket",
        finalPrice: "3,299",
        secondaryPrice: "4,099",
        discount: "20%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz72088_tan_xl_1",
            "https://media.boohoo.com/i/boohoo/mzz72088_tan_xl_2",
            "https://media.boohoo.com/i/boohoo/mzz72088_tan_xl"
        ],
        color: "Tan",
        colorRGB: "210, 180, 140",
        sizes: ["M", "L", "XL", "XXL"],
        highlights: [
            { title: "Material", value: "Wool Blend" },
            { title: "Care", value: "Dry Clean Only" },
            { title: "Fit", value: "Oversized" }
        ]
    },
    {
        title: "Mint Graphic Tee",
        finalPrice: "1,599",
        secondaryPrice: "2,099",
        discount: "24%",
        images: [
            "https://media.boohoo.com/i/boohoo/mzz68110_mint_xl_1",
            "https://media.boohoo.com/i/boohoo/mzz68110_mint_xl_2",
            "https://media.boohoo.com/i/boohoo/mzz68110_mint_xl"
        ],
        color: "Mint",
        colorRGB: "152, 255, 152",
        sizes: ["S", "M", "L"],
        highlights: [
            { title: "Material", value: "Printed Cotton" },
            { title: "Care", value: "Gentle Wash Only" },
            { title: "Fit", value: "Regular" }
        ]
    },
];

export default data;
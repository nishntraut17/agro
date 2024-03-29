const array = [
    {
        id: 1,
        title: "All types of Insecticides, Fungicides, and Herbicides",
        content: "Various types of insecticides, fungicides, and herbicides",
        description: "This product offers a comprehensive range of insecticides, fungicides, and herbicides for crop protection. It includes formulations designed to control pests such as insects, fungi, and weeds that can damage crops and reduce yields. These products are formulated using advanced technologies to ensure effective pest management while minimizing environmental impact.",
        dosage: "As per recommended guidelines for each product",
        package: "Available in various packaging sizes"
    },
    {
        id: 2,
        title: "Sulphated micronutrients Mixture for drip Grade 1",
        content: "Sulphated micronutrients mixture",
        description: "Sulphated micronutrients mixture for drip irrigation systems is specially formulated to provide essential micronutrients to plants through drip irrigation. This Grade 1 mixture contains a balanced combination of micronutrients including sulphur, which are vital for various metabolic processes in plants. It helps prevent and correct nutrient deficiencies, promoting healthy growth and optimal yields.",
        dosage: "As per recommended guidelines for drip irrigation systems",
        package: "Available in various packaging sizes"
    },
    {
        id: 3,
        title: "Chelated micronutrients Mixture Grade 2",
        content: "Chelated micronutrients mixture",
        description: "Chelated micronutrients mixture Grade 2 is a premium formulation containing chelated micronutrients. Chelation enhances the availability and uptake of micronutrients by plants, ensuring efficient nutrient utilization. This Grade 2 mixture provides a balanced supply of essential micronutrients necessary for various biochemical processes in plants, promoting healthy growth, and improving yield and quality.",
        dosage: "As per recommended guidelines for each crop",
        package: "Available in various packaging sizes"
    },
    {
        id: 4,
        title: "Multi activity bio organic granules",
        content: "Sea weed extract, Amino acids, Humic acid, Herbal extract and Anti root rot substances",
        description: "Due to sea weed extract based product there is overall growth of crops due to plant cell division.Due to blend of vital amino acids,there is healthy and vigorous growth with increased number of flowers and fruits.Due toHerbal Extract, plants are protected from sucking pests in the initial stages of their growth. Herbal Extract also prevents attacks from other insects and pests as well as protects the plant from nematodes and termites.Due to Anti root rot substances,Due to soil gets sterilized by killing harmful fungi such as Fugerium and Pithium. > Due to all above constituents blended in one granular formulation. Multi Activity Bio Organic Granules is found to be more effective than any other granular formulation available in market.",
        dosage: "8 to 16 Kg per Acre as per type of crop",
        package: "25 Kg ( HDPE Bag )"
    },
    {
        id: 5,
        content: "Seaweed, Amino & Humic Acid Based Granules",
        title: "Three in one Granules ( Seaweed,Amino,Humic Acid)",
        description: " Seaweed, Amino & Humic Acid Based Granules is unique blend combines the benefits of seaweed extract, amino acids, and humic acid to provide a comprehensive solution for promoting healthy plant development.Due to sea weed extract based product there is overall growth of crops due to plant cell division.Due to blend of vital amino acids,there is healthy and vigorous growth with increased number of flowers and fruits.Due to Humic acid, there is profuse growth of white roots. Presence of Humic acid in soil helps easy observation of nutrients present in soil by converting them in respective humate form.",
        dosage: "10 Kg / Acre",
        package: "25 Kg ( HDPE Bag )"
    },
    {
        id: 6,
        title: "Seaweed extract based granules",
        content: "Seaweed Extract",
        description: "Seaweed extract based granules are derived from natural seaweed sources. They contain a range of beneficial nutrients and growth-promoting substances that enhance plant growth and development. Seaweed extract stimulates root growth, improves nutrient uptake, and enhances plant resistance to stress. It also promotes overall plant health and vigor.",
        dosage: "10 Kg / Acre",
        package: "25 Kg (HDPE Bag)"
    },
    {
        id: 7,
        title: "Humic Acid Granules",
        content: "Humic Acid",
        description: "Humic Acid Granules have the ability to buffer soil pH, making them suitable for a wide range of soil types. They can help neutralize acidic or alkaline soils, creating a more balanced pH level for plant growth.It enhances soil structure, promote microbial activity, and increase nutrient availability.increase the organic matter contentStimulates root development, leading to stronger and healthier plants.It enhances seed germination, improves nutrient uptake Increases plant resistance to stressors such as drought and disease.",
        dosage: "10 Kg / Acre",
        package: "25 Kg ( HDPE Bag )"
    },
    {
        id: 8,
        title: "Biostimulants for all crops",
        content: "Amino Acids, Vitamins, Proteins Sea Weed Extract, Innovative and modern bio-stimulant for stimulation growth & increase in yield with high quality.",
        description: "Bio Stimulant For All Cropsis recommended for foliar & soil application for all vegetables, groundnut, grapes, cotton, oilseed and chillies & to every types of fruit for stimulating growth, promotion of flowering & thus increase in yields.Bio Stimulant For All Cropscan be used as foliar or it can also be drenched near roots.Bio Stimulant For All Crops brings about overall vegetative growth of plants.It increases the number of flowers and fruits. It also helps in increasing the size, luster on fruits and also increases the shelf life of produce.",
        dosage: "Dosage :-25 ml Bio Stimulant For All Crops per 100 litre water.(0.5 ml - 1 ml Bio Stimulant For All Crops per litre water) Time of Application : 1st spray -At Flowering stage,2nd spray - At Fruit setting stage,3rd spray: At fruit development stage (15 - 20 days after second spray),4th spray: As per requirement.",
        package: "50 Ltr / 200 Ltr (HDPE Drum)",
    },
    {
        id: 9,
        title: "Flowering Enhancer and Fruit Setter",
        description: "Flowering Enhancer & Fruit Setter is a unique herbal product which increases the number of reproductive flowers. This result is more fruit formation & hence the final yield increases by 30-40 %.Flowering Enhancer & Fruit Setter also reduces the flower & fruit dropping.Flowering Enhancer & Fruit Setter also gives bigger size fruits.",
        dosage: "Use 2 ml Flowering Enhancer & Fruit Setter Per Litre water.Time of Application :-1st spray - 25-30 days before flowering starts.2nd spray - 15-20 days after flowering.",
        crops: "Use for all types of Vegetables & Horticulture crops such as Mango, Citrus, Papaya, Pomegranates etc.",
        package: "50 Ltr / 200 Ltr (HDPE Drum)",
    },
    {
        id: 10,
        title: "Amino and Mineral based plant growth promoter",
        content: "Sea weed Extract, Minerals, Casein Protein, Aqua",
        description: "Amino Acid plus Mineral Based Plant Growth Promoter is amino acids based product.Amino acid provides nitrogen to plants and also stimulates protein formulation. This brings about profuse growth of plant in all stages. It helps in cell division and cell formulation.Amino Acid plus Mineral Based Plant Growth Promoter photosynthesis and brings about complete growth of plants with vigour.Amino Acid plus Mineral Based Plant Growth Promoter increases pollination & fruit formation. It also prevents its dropping.It also helps improve micro flora, which in turn, facilitates the nutrient assimilation.",
        dosage: "2ml per litre water",
        timeOfApplication: "Time of Application :-1st spray :- 15 - 20 days after transplantation / germination.2nd spray :- At flowering or fruit setting stage (20 days after 1st spray),Available Packing: - 50 Ltr / 200 Ltr (HDPE Drum)",
        package: "50 Ltr / 200 Ltr (HDPE Drum)",
    },
    {
        id: 11,
        title: "Silicon based spreader and Adjuvant",
        content: "Silicon",
        description: "Silicon Based Spreader, penetrator & adjuvant is Silicon based non - ionic surfactant. It increases Effectiveness of Agriculture Sprays & also reduces its Quantity.Silicon Based Spreader, penetrator & adjuvant spreads rapidly on leaf surface providing wetting, sticking & rain fastness effect. It spreads evenly on Leaf surface & easily absorbed by plants due to it's low Viscosity & molecular weight.Silicon Based Spreader, penetrator & adjuvant enhances efficacy of Insecticides, Fungicides, Herbicides, PGRS & Foliar fertilizers.",
        dosage: "25 ml for 100 Litre of water",
        package: "50 Ltr / 200 Ltr (HDPE Drum)",
    },
    {
        id: 12,
        title: "Di sodium octa borate tetra Hydrate Boron 20%",
        content: "Di Sodium Octa Borate Tetra Hydrate Boron 20%",
        description: "Di sodium octa borate tetra hydrate, also known as boron 20%, is a micronutrient fertilizer containing boron. Boron is essential for various physiological processes in plants, including cell wall formation, sugar transport, and reproductive development. This product helps prevent boron deficiency in crops, promoting healthy growth and optimal yields.",
        dosage: "1-2 Kg / Acre",
        package: "25 Kg (HDPE Bag)"
    },
    {
        id: 13,
        title: "Zinc EDTA",
        content: "Zinc EDTA",
        description: "Zinc EDTA is a chelated form of zinc, where zinc is combined with EDTA (ethylenediaminetetraacetic acid) to form a stable compound. Chelation enhances the availability of zinc to plants, making it more easily absorbed through the roots. Zinc is an essential micronutrient required for various enzymatic reactions in plants, including photosynthesis and hormone regulation. Zinc EDTA helps prevent and correct zinc deficiencies in crops, promoting healthy growth and development.",
        dosage: "1-2 Kg / Acre",
        package: "25 Kg (HDPE Bag)"
    }
]
export default array;
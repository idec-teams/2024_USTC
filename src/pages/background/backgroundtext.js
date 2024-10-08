const text = {
  title: [{ title: "Background" }],
  text1: [
    {
      subtitle: "Sakuranetin and Naringenin",
      text: "Sakuranetin (4,5-dihydroxy-7-methoxyflavanone) is a compound that belongs to dihydroflavonoid. In plants, it is synthesized from the precursor substance naringenin and exists as a phenolic plant antitoxin. In recent years, sakuranetin have been widely reported for its multiple pharmacological benefits, including antioxidant, anti-inflammatory, antimycobacterial, anti-viral, anti-fungal, anti-Leishmania protozoan, anti-trypanosomal, glucose uptake stimulation, neuroprotective, antiretroviral generation, and antitumor properties. Today, most flavonoids are synthesized either by direct extraction from plants or by chemical synthesis methods. However, direct extraction is limited by plant growth conditions and the unstable biomass supply for continuous production of flavonoids is unstable. Moreover, the two existing methods of extraction are costly and cannot meet the requirements of industrialized production. ",
    },{text:[{text:"Biosynthesis, as a highly potential production method, has been reported in articles using chassis such as"},{em:" Escherichia coli (E. coli)"},{text:"And"},{em:" Saccharomyces cerevisiae "},{text:"as model organisms, but the yield is still a long way from reaching the large scale. As reported, this pathway is limited by the condensation reaction of p-coumaroyl coenzyme A with three molecules of malonyl-CoA, which is catalyzed by chalcone synthase. Optimization of the enzymatic profile of chalcone synthase becomes critical for improving yield. When considering how to optimized the pathway to maximize the output, we use several methods in our design: to use the enzyme in the pathway with high catalytic activity, to get better chalcone synthase and to increase the protein expression level by using codon optimized coding sequence and high-efficient promoters."}]}
  ],
  text2: [
    {
      subtitle: [{ em: "Vibrio natriegens" }],
      text: [
        {
          em: "Vibrio natriegens",
        },
        {
          text: " is a Gram-negative marine bacterium with a fast growth rate of 15.61 ± 0.18 min in the logarithmic phase, compared with 27.23 ± 0.69 min for ",
        },
        { em: "E. coli" },
        {
          text: " cells. Compared with common chassis organisms such as yeast and ",
        },
        { em: "E. coli" },
        { text: ", " },
        { em: "V. natriegens" },
        {
          text: " has a faster growth rate, a broader substrate spectrum, superior substrate uptake and an abundant number of ribosomes in the cell, which contributes to its excellent exogenous protein expression ability, so V. natriegens is a new type of chassis cell that has been developed in the field of biotechnology and synthetic biology in recent years. Based on its excellent biological properties, a variety of natural products and proteins, such as L-DOPA",
        },
        { citation: { text: "1", href: "./Reference.html?citation=1" } },
        { text: ", melanin" },
        { citation: { text: "2", href: "./Reference.html?citation=2" } },
        { text: ", c-type cytochromes" },
        { citation: { text: "3", href: "./Reference.html?citation=3" } },
        {
          text: " and other substances, have been efficiently biosynthesized in ",
        },
        { em: "V. natriegens" },
        {
          text: ". Moreover, Vibrio exhibits robust applicability to commonly used synthetic biology parts. The synthetic biology tools for the ",
        },
        { em: "V. natriegens" },
        { text: " are maturing, which shows further promises. " },
      ],
    },
  ],
  text3: [
    {
      subtitle: "Biosensor",
      text: [{text:"In the directed evolution process, high-throughput screening is the main bottleneck. Biosensors offer the benefits of high sensitivity, real-time monitoring, and efficiency properties. Previous flavonoid product assays have relied on high performance liquid chromatography (HPLC), which requires much time and effort. Due to the relative stability of the intracellular environment, biosensors are highly resistant to interference without the need of complex sample preprocessing, which means it can eliminate the need for purification of cultures as well as enrichment. In the process of directed evolution, it offers an excellent way to characterize signals. What’s more, a variety of genetic engineering tools, such as different promoters, RBS, circuits and CDSs can further alter the sensitivity of biosensors by modulating protein expression, indicating finer detection. In our study, we choose to express the TtgABC-TtgR system derived from "},{em:"Pseudomonas putida "},{text:"DOT-T1E in "},{em:"V. natriegens, "},{text:"and it can reflect the product concentration in real time and efficiently."}],
    },
  ],
};
export default text;

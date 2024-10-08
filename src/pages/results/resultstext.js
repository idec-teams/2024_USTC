import _Results1 from "@image/results/results1.png";
import _Results2 from "@image/results/results2.png";
import _Results3 from "@image/results/results3.png";
import _Results4 from "@image/results/results4.png";

const text = {
  title: [{ title: "Results" }],
  text1: [
    {
      subtitle: "Plasmid construction for synthetic pathways",
      text: [
        {
          text: "To increase the protein expression level, we decided to employ T7 promoter to drive the expression of the enzymes. Considering that there's T7 RNA polymerase coding sequence in ",
        },
        { em: "V. natriegens' " },
        {
          text: "genome and the relatively more complex method to modify its genome, we constructed a T7 RNAP expression cassette. When choosing the plasmid backbone, we found that",
        },
        { em: "V. natriegens" },
        {
          text: "can only recognize a few replication origins like f1-ori and p15A-ori, and plasmids with pMB1/pBR322/pUC origin cannot replicate in it. Due to plasmid incompatibility, we chose pETDuet-1 and pACYCDuet-1 as the backbone. The two plasmids have different origins of replication so they can co-exist in ",
        },
        { em: "V. natriegens." },
        {
          text: "What's more, both of them have two expression cassettes driven by T7 RNAP and LacI/LacO so the expression of protein can be controlled by Isopropyl-beta-D-thiogalactopyranoside (IPTG). We replaced the first expression cassette on pETDuet-1 with T7 RNAP cassette driven by lac promoter, and inserted the 5 genes into remaining 3 expression cassettes. ",
        },
      ],
    },
    {
      src: _Results1,
      text: "Figure 1. The structure of pACYCDuet-1-TAL-4CL and pETDuet-1-OMT3-CHI-CHS",
    },
    {
      text: "Ultimately, we successfully constructed the pETDuet-14CL-TAL and pACYCDuet-1-OMT3-CHI-CHS plasmids utilizing the AlTAL gene, At4CL gene, PfOMT3, EbCHI gene, and ErCHS gene.",
    },
    {
      src: _Results2,
      text: [
        {
          text: "Figure 2. Electropherogram of colony PCR results. (A) Colony PCR result of ",
        },
        { em: "E. coli " },
        {
          text: "clones containing pACYCDuet-OMT3-CHI-CHS. (B) Colony PCR result of ",
        },
        { em: "E. coli " },
        { text: "clone containing pETDuet-T7RNAP-4CL-TAL" },
      ],
    },
    {
      text: "And we also constructed the pACYC177-J23106-TtgR(L66A/N110A)-Pttg1/2-GFP and pUC57-CHS(F153V/A82M) by means of single mutations.",
    },
    {
      src: _Results3,
      text: [
        {
          text: "Figure 3. Electropherogram of colony PCR results. (A) Colony PCR result of ",
        },
        { em: "E. coli " },
        {
          text: "clones containing pUC57-CHS(F153V/A82M). (B) Colony PCR result of ",
        },
        { em: "E. coli" },
        {
          text: "clone containing pACYC177-J23106-TtgR(L66A/N110A)-Pttg1/2-GFP.",
        },
      ],
    },
    {
      text: [
        {
          text: "We are still working on transforming these pathways plasmids into ",
        },
        { em: "V. natriegens" },
        { text: " following culturing and the further product inspection." },
      ],
    },
  ],
  text2: [
    {
      subtitle: "Biosensor Validation",
      text: [
        {
          text: "It is noteworthy that naringenin itself, as a flavonoid, has an inhibitory effect on the growth of ",
        },
        { em: "V. natriegens. " },
        {
          text: "This was found through the comparative graphs of growth curves, which may likewise affect the effect of protein expression.",
        },
      ],
    },
    {
      src: _Results4,
      text: [
        {
          text: "Figure 4. Verifying the effectivity of TtgR-GFP sensor. A. Growth curve of ",
        },
        { em: "V.natriegens " },
        {
          text: "in different concentration of naringenin; B. Ratio of GFP fluorescence:OD600 (relative fluorescence intensity) under different concentration of naringenin; C. Relative fluorescence intensity under different concentration of naringenin.(B: 150min fitted curve R2 :0.775; 180min fitted curve R2 :0.943; 210min fitted curve R2 :0.782; 240min fitted curve R2",
        },
      ],
    },
    {
      text: "The GFP showed a certain fluorescence intensity without the addition of inducers, resulting in a certain fluorescence leakage. In the available data obtained, we get the expected, linear growth curve over a range of inducer concentrations. According to the fitted curve, the effect caused by background fluorescence gradually decreased with time, and the homogenized fluorescence intensity showed a relatively stable linear enhancement relationship with naringenin concentration after the incubation time reached 150 min. Although the homogenized relative fluorescence units (RFU) values do not show a clear multiplicative relationship, their stable linear relationship proves that they can be used to assist High-through screening for directed evolution.",
    },
  ],
};
export default text;

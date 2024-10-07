import _Figure1 from "@figure/figure1.png";
import _Figure2 from "@figure/figure2.png";
import _Figure3 from "@figure/figure3.png";
import _Figure4 from "@figure/figure4.png";
import _Figure5 from "@figure/figure5.png";
import _Figure6 from "@figure/figure6.png";
import _Figure7 from "@figure/figure7.png";
import _Figure8 from "@figure/figure8.png";
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
      src: _Figure1,
      text: "Figure 1. The structure of pACYCDuet-1-TAL-4CL and pETDuet-1-OMT3-CHI-CHS",
    },
    {
      text: "Ultimately, we successfully constructed the pETDuet-14CL-TAL and pACYCDuet-1-OMT3-CHI-CHS plasmids utilizing the AlTAL gene, At4CL gene, PfOMT3, EbCHI gene, and ErCHS gene.",
    },
    {
      src: _Figure2,
      text: "Figure 2. Electropherogram of colony PCR results. (A) Colony PCR result of E. coli clones containing pACYCDuet-OMT3-CHI-CHS. (B) Colony PCR result of E. coli clone containing pETDuet-T7RNAP-4CL-TAL",
    },
    {
      text: "And we also constructed the pACYC177-J23106-TtgR(L66A/N110A)-Pttg1/2-GFP and pUC57-CHS(F153V/A82M) by means of single mutations.",
    },
    {
      src: _Figure3,
      text: "Figure 3. Electropherogram of colony PCR results. (A) Colony PCR result of E. coli clones containing pUC57-CHS(F153V/A82M). (B) Colony PCR result of E. coli clone containing pACYC177-J23106-TtgR(L66A/N110A)-Pttg1/2-GFP.",
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
      text: "It is noteworthy that naringenin itself, as a flavonoid, has an inhibitory effect on the growth of V. natriegens. This was found through the comparative graphs of growth curves, which may likewise affect the effect of protein expression. ",
    },
    {
      src: _Figure5,
      text: "Figure 5. Verifying the effectivity of TtgR-GFP sensor. A. Growth curve of V.natriegens in different concentration of naringenin; B. Ratio of GFP fluorescence:OD600 (relative fluorescence intensity) under different concentration of naringenin; C. Relative fluorescence intensity under different concentration of naringenin.(B: 150min fitted curve R2 :0.775; 180min fitted curve R2 :0.943; 210min fitted curve R2 :0.782; 240min fitted curve R2 :0.958)",
    },
    {
      text: "The GFP showed a certain fluorescence intensity without the addition of inducers, resulting in a certain fluorescence leakage. In the available data obtained, we get the expected, linear growth curve over a range of inducer concentrations. According to the fitted curve, the effect caused by background fluorescence gradually decreased with time, and the homogenized fluorescence intensity showed a relatively stable linear enhancement relationship with naringenin concentration after the incubation time reached 150 min. Although their homogenized values do not show a clear multiplicative relationship, their stable linear relationship proves that they can be used to assist High-through screening for directed evolution.",
    },
  ],
};
export default text;

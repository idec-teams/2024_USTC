import _Figure1 from "@image/design/figure1.png";
import _Figure2 from "@image/design/figure2.png";
import _Figure3 from "@image/design/figure3.png";
import _Figure4 from "@image/design/figure4.png";
import _Figure5 from "@image/design/figure5.png";
import _Figure6 from "@image/design/figure6.png";

const text = {
  title: [{ title: "Design" }],
  text1: [
    {
      subtitle: "Design of synthetic pathwayss of Naringenin and Sakuranetin",
      text: "Large-scale synthesis of flavonoids relies on the complement of precursors, and the selection of a suitable precursor as a substrate is critical considering the economic cost. The main synthetic pathways commonly used for naringenin are the phenylalanine pathway and the tyrosine pathway. In the phenylalanine pathway, the step from the substrate phenylalanine to pcoumaric acid is catalyzed by phenylalanine ammonia lyase (PAL), cinnamic acid 4hydroxylase (C4H) and 4-coumaroyl CoA ligase (4CL). In contrast, in the tyrosine pathway, tyrosine ammonia lyase (TAL) catalyzes the direct conversion of tyrosine to 4-coumarate, bypassing the C4H intermediate. For heterologous protein expression systems, going through as few steps as possible is the best way to minimize the accumulation of intermediates and their associated effects. Another barrier was that C4H, which is a membrane-bound P450 monooxygenase, could not be functionally expressed in bacteria. Therefore, we ultimately chose the tyrosine pathway for naringenin production. To synthesize sakuranetin, Omethyltransferase 3 (OMT3) is needed. The overall pathway including enzymes, substrates and products are shown in Figure 1.",
    },
    {
      src: _Figure1,
      text: "Figure 1. Overall biosynthesis pathway of naringenin and sakuranetin used in this study. Figures of different compounds were cited from KEGG.",
    },
  ],
  text2: [
    {
      subtitle: "Codon Optimization of CHI and CHS",
      text: "We choose Genetic Algorithm (GA) for codon optimization.GA is an optimization algorithm that simulates natural selection and genetic mechanisms. It belongs to the category of evolutionary computation and aims to find the optimal solution to the problem by simulating the process of biological evolution. The basic idea of genetic algorithm originates from Darwin's theory of natural selection. ",
    },
    {
      src: _Figure2,
      text: "Figure 2. Basic flowchart of genetic algorithm(GA) ",
    },
    {
      text: "Individual codon usage (ICU) is considered to be one of the most critical factors affecting the efficiency of mRNA translation. But previous studies have also reported significant effects of codon pair usage, also known as codon context (CC), on protein expression levels. Therefore, we chose ICU fitness and CC fitness as conditions. And the resultant sequence is ICU-/CCoptimal one. In the analysis of codon usage patterns, significant differences in ICU and CC distributions between highly expressed genes and other genes confirmed the importance of using highly expressed genes to characterize preferred codons.",
    },
    {
      text: [
        {
          text: "In our research, we downloaded the 2000 most highly expressed genes of ",
        },
        { em: "V. natriegens " },
        {
          text: "(ATCC 14048) from the GenBank as reference sequences and counted the codon usage frequency and codon pair occurrence frequency of these genes. After the number of iterations of the algorithm is reached, the optimized sequence is outputted. The concrete calculation method is listed in the protocol page.",
        },
      ],
    },
  ],
  text3: [
    {
      subtitle: "Designing Biosensor for Detection",
      text: [
        { text: "The TtgABC-TtgR system from " },
        { em: "Pseudomonas putida " },
        {
          text: "DOT-T1E encodes an efflux pump involved in resistance to antibiotics and aromatic compounds whose expression is activated by such molecules via the transcriptional repressor TtgR. TtgR repressors can undergo conformational changes by binding to a variety of flavonoids and antibiotics, and de-repression occurs upon release from the homologous operon. Considering that the chemical formula and three-dimensional structure of naringenin chalcone and phloretin are very similar (differing only by one carbon-carbon double bond), and after molecular docking simulation, we attempt to construct this system in ",
        },
        { em: "V. natriegens " },
        {
          text: "for real-time detection of intracellular naringenin/naringenin chalcone concentration. This biosensor is mainly used in two directions. One is for high-throughput screening to guide directed evolution, and the other is for yield detection of final pathway synthesis products. We chose the codon-optimized green fluorescent protein (GFP) gene as the reporter gene, and fused it to the promoter of the TTG operon. In the absence of naringenin or naringenin chalcone, the transcriptional regulator TtgR binds to the pseudo-palindromic DNA sequence of the operon to repress its expression. Upon binding of the inducer to the active binding site of TtgR, the repressor is shed from the binding site and the downstream gene GFP initiates expression.",
        },
      ],
    },
    {
      src: _Figure3,
      text: "Figure 3. (A) The principles of the TtgR repressor; (B) The structure of pACYC177-TtgR-GFP ",
    },
    {
      text: [
        {
          text: "For the high-throughput screening of directed evolution, we constructed multiple plasmids with different strengths of constitutive promoters controlling TtgR Repressor to obtain biosensors with appropriate sensitivity and more suitable for directed evolution. Meanwhile, to ensure that the system can work properly in ",
        },
        { em: "V. natriegens," },
        ,
        // { citation: { text: "7", href: "./Reference.html?citation=7" } },
        {
          text: " we constructed plasmid versions of two different TtgR repressor operons. As mentioned in Xiong's article, the wild-type-derived TtgABC operon part could not successfully initiate the expression of red fluorescent protein (RFP) in ",
        },
        { em: "E. coli" },
        {
          text: ", a T/A mutation was introduced at the tenth base site of this operon to obtain the TtgABC2 sequence, which is proven to successfully initiate downstream gene expression. We detect the fluorescence intensity by enzyme-labeled instrument, and monitor the cellular OD600 at the same time. Finally, we homogenize the data by fluorescence intensity/cell density, so as to evaluate the correspondence between different inducer concentrations and fluorescence intensity.",
        },
      ],
    },
    {
      text: "Moreover, we combined protein structure analysis, simulation, and molecular docking, trying to shorten the directed evolutionary pathway by changing the detection substrate from naringenin to naringenin chalcone, introducing single mutations for more application possibilities. We performed molecular docking simulations of TtgR and naringenin chalcone, and then selected the optimal docking possibilities by comparing the fractions of the combined binding energies. The white numbers represent binding energy, and we chose the models with the highest score. The crucial sites are D172, E78, S77 and C137, which are partly different from the crucial sites in the binding mode of phloretin to TtgR. Experimental validation of whether TtgR can detect naringenin chalcone is in progress.",
    },
    {
      src: _Figure4,
      text: "Figure 4.  A. Molecular docking simulation TtgR with naringenin chalcone",
    },
    {
      text: "For a more sensitive biosensor, we refer to the binding mode of phloretin to TtgR to guide the construction of naringenin chalcone-targeted sensors. The site 176 is a high affinity one for phloretin. In Pseudomonas putida strain KT2440, which has a low tolerance to toxic chemicals, the corresponding amino acid is glycine. Studies have shown that G176R can effectively enhance the binding ability to phloretin. For pathway product detection, with reference to the yield concentration achievable in existing production (1+g/L), we want a sensor that could be applied in large-scale production, which owns lower sensitivity and higher requirements for inducer concentration. Based on the current research, we select to mutate site N110, site L66 and site V96. Each site individually showed a clear decrease in affinity for naringenin and phloretin, which demonstrated a better rate of DNA release only at higher concentration. At the same time, those mutations had a higher affinity for naringenin than for phloretin.",
    },
    {
      src: _Figure5,
      text: "Figure 5. A. Molecular docking modeling of TtgR mutant(G176R) with phloretin; B. Molecular docking modeling of TtgR mutant(L66A, V96A, N110A, G176R) with phloretin; C. Molecular docking modeling of TtgR mutant(G176R) with naringenin; D. Molecular docking modeling of TtgR mutant(L66A, V96A, N110A, G176R) with naringenin; E. Molecular docking modeling of wild-type TtgR with phloretin; F. Molecular docking modeling of wild-type TtgR with naringenin;",
    },
  ],
  text4: [
    {
      subtitle: "Directed Evolution of CHS",
      text: [
        {
          text: "The designed and constructed intracellular biosensor can reflect the amount of product by fluorescence intensity. CHS can catalyze p-coumaroyl coenzyme A in one step to obtain detectable naringenin chalcone. However, the price of p-coumaroyl coenzyme A is relatively high, so we decided to use its precursor, p-coumaric acid, as a substrate. Then we inserted the mutant sequence of CHS and CHI gene into the constructed pACYCDuet-1-4CL to obtain a series of plasmids for targeted evolutionary effect detection. Ultimately, the TtgR-GFP biosensor will be applied to detect the concentration of naringenin in vivo, which can reflex the result of direct evolution of CHS. As shown in Figure 6, we will transform both plasmids into ",
        },
        { em: "V. natriegens." },
        {
          text: " With the combination of 4CL, CHS and CHI, the bacterium can produce naringenin from p-coumalic acid. The catalyst ability varies among different CHS mutants, resulting in various naringenin concentration in different clones. Compared to HPLC, biosensor can reflex real-time naringenin concentration and can save time from preparing the samples for HPLC, making it a useful tool in directed evolution.",
        },
      ],
    },
    {
      src: _Figure6,
      text: "Figure 6.  Dual plasmid system for in high-throughput screening of V. natriegens",
    },
    {
      text: [
        {
          text: "During our research, we found that the mechanism of byproduct formation in CHS catalysis may involve lactonization-type ring closure, or it may be due to the release of catalytic intermediates from the catalytic site. Therefore, having a more stable protein structure may be a practical way to minimize byproduct formation. Xiang's",
        },
        { citation: { text: "13", href: "./Reference.html?citation=13" } },
        {
          text: " article mentions that T145M substitution leads to the formation of new hydrophobic bonds and possesses stronger stability values. Although the EbCHS we chose and the mutants originated from different organisms, we selected the mutation A82M and the neighboring N83K after the protein sequence comparison. Meanwhile, based on the increased naringenin abundance and yield in the article, we performed the mutations V37D, M96L, K219E, A296Q, and A297G, and verified the effect of the single-point mutation F153V, as well as the effect of multiple mutation combinations.",
        },
      ],
    },
  ],
};
export default text;

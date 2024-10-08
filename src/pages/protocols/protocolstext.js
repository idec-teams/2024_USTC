const text = {
  title: [{ title: "Protocols" }],
  text1: [
    {
      subtitle: "Genetic Algorithm ",
      text: [
        {
          text: "Multiple iterations are required in this algorithm. In each iteration we do the following steps. Firstly, we calculate the ICU fitness and CC fitness calculation. ",
        },
        { span:" " },
        {
          text: " is the frequency of the kth codon in the reference sequence and ",
        },
        { span:" " },
        {
          text: " is the frequency of the kth codon in the current individual; ",
        },
        { span:" " },
        {
          text: " is the frequency of the kth codon pair in the reference sequence, and ",
        },
        { span:" " },
        {
          text: " is the frequency of the kth codon pair in the current individual. ",
        },
      ],
    },
    { mark: "tex1" },
    { mark: "tex2" },
    {
      text: [
        {
          text: "Then we calculate the individual fitness. Each round first initializes the fitness of each individual to 0. Then all pairs of individuals in the population are traversed, and for each pair, there are ",
        },
        { span:" " },
        { text: " and " },
        { span:" " },
        { text: " . Adaptation is evaluated according to the following rules:" },
      ],
    },
    { mark: "tex3" },
    { mark: "tex4" },
    { mark: "tex5" },
    { mark: "tex6" },
    {
      text: "Whenever a particular sequence is found to be dominated by another sequence, the domination rank of the former sequence is lowered. Finally we preform the fitness normalization and selection. For the selection in the algorithm we use the roulette wheel method. Since the algorithm can only be applied to cases where the fitness value is positive, we normalize the fitness, after which we apply the corresponding value to the roulette wheel method, and all the individuals of the original population and the new population are sorted according to the fitness, and the part of the individuals with the lowest fitness is discarded to ensure that the number of individuals in the population remains unchanged. When the maximum number of iterations is reached, the algorithm ends and the sequence with the highest fitness is output.",
    },
  ],
  text2: [
    {
      subtitle: [{ em: "Vibrio natriegens" }, { text: " transformation" }],
      text: [
        { text: "Before the transformation, pick up a single colony of " },
        { em: "V. natriegens" },
        {
          text: " on the LB plate and transfer into 20 mL LB liquid medium and culture overnight under the condition of 30 ℃, 200 rpm. Pipette 0.5 mL culture and transfer into 50 mL BHIv2 (BHI medium, 2M NaCl, 231 mM MgCl",
        },
        { sub: "2" },
        {
          text: ", 42 mM KCl) liquid media in a 250 mL flask, then incubated under 37 ℃, 200 rpm until OD600=0.5. Collect 10 mL culture, chill on ice for 15 min and centrifugate at 3000 rcf under 4 ℃ for 5 min. Remove the supernatant and resuspend the bacteria in 10 mL transformation buffer (680 mM sucrose, 7 mM K",
        },
        { sub: "2" },
        { text: "HPO" },
        { sub: "4" },
        {
          text: "), then centrifugate at 3000 rcf under 4 ℃ for 5 min. Repeat the process twice to wash the remained salts completely. Then resuspend the bacteria with 300 μL cold transformation buffer.",
        },
      ],
    },
    {
      text: "When performing transformation, add 1.25 μL g plasmid into 50 μL L competent cell on ice. Transfer the cell-DNA suspension to a chilled electroporation cuvette with a 1mm gap size. Cells were electroporated using the following parameters: 1200 V, 25 μF, 200 Ω. Then immediately recover the cell with 500 μL 37 ℃ recover medium (BHIv2 with 680 mM sucrose), transfer into a conical tube and incubate at 37 ℃ under 50 rpm for 1 h. Plate the recovery culture on LB plate with appropriate antibiotic and incubate at 37 ℃ for 14 h.",
    },
  ],
  text3: [
    {
      subtitle: "GFP sensing",
      text: [
        {
          text: "Strains that have been successfully electroporation with the desired plasmid and colonized for PCR validation were cultured under the condition of 200 rpm, 37° overnight. Pipette 0.5 mL culture and transfer into 50 mL BHIv2 liquid media in a 250 mL flask, then incubated under 37 ℃, 200 rpm until OD",
        },
        { sub: "600" },
        {
          text: "=0.5. Take multiple 1 ml samples and transfer to 24-well plates. Add naringenin or naringenin chalcone reservoirs of graded concentration. Incubate on shaker for graded time. Measure the OD",
        },
        { sub: "600" },
        {
          text: " and spike the sample in 96-well black plates. Measure the fluorescence under microplate reader.",
        },
      ],
    },
  ],
  text4: [
    {
      subtitle: "Molecular Docking",
      text: [
        {
          text: "The PDB documents of TtgR in complex with naringenin and phloretin are cited from RCSB PDB (2UXU and 2UXI)",
        },
        { citation: { text: "5", href: "./Reference.html?ciattion=5" } },
        {
          text: ".We use Pymol to visualize molecular docking. After removing water molecules, the binding hydrogen bonds between TtgR and small ligands are displayed, and the name and sequence number of hydrogen-bonded residues are labeled. The same work is also done after introducing four single mutations.",
        },
      ],
    },
    {
      text: "The prediction of the docking of TtgR and naringenin chalcone comes from Swiss dock. We download the SDF file of naringenin-chalcone from pubchem , use OpenBabel to convert it to mol2 format and upload it and the pdb file of TtgR to Swiss dock to predict the binding situation. After the computing is finished , we use Chimera X to display the prediction result, select two results that the ligand separately binds to the two subunits of the dimer with the lowest intermolecular energy and show hydrogen bonds between ligands and residues of TtgR.",
    },
  ],
  text5: [
    {
      subtitle: "PCR:",
      text: "We use Vazyme’s Phanta Max kit for amplifying the genes or fragments. The protocol was followed and the PCR product was purified using Vazyme’s FastPure Kit.",
    },
    {
      subtitle: "Restriction Enzyme Digestion",
      text: "For digesting plasmids or fragments, we add 4μg plasmids or fragments, 3μL FastDigest Buffer in a 30μL system. The reaction liquid was then incubated under 37℃ for 30min then heated under 85℃ for 20min.",
    },
    {
      subtitle: "Point mutation:",
      text: "To mutate certain site in a gene in cloning vector (pUC19 or pUC57), we used primers with point mutation to linearize the plasmid and introduced the mutation to it. The linearized plasmid contains 15-20bp of homologous sequences (which contains the mutated site). It is recircled using Vazyme's CE II kit.",
    },
    {
      subtitle: "Homologous Recombination ",
      text: "We used Vazyme’s CE II kit for single fragment insertion and Beyotime’s Seamless Clone kit for multi-fragments insertion. The reaction liquid was mixed by the instruction then incubated under 37℃ for 30min.",
    },
  ],
  text6: [
    {
      subtitle: [
        { text: "Plasmid transformation for " },
        { em: "E. Coli" },
        { text: ":" },
      ],
      text: " Unfreeze Trelief 5α Competent Cell on ice for about 15min. Then add no more than 10μL recombination product or 1μg plasmid to 100μL cell. Incubated on ice for 30min, then heat shock under 42℃ for 60s. Then after recover on ice for 3min, add 1mL LB to the competent cell, incubated under 37℃, 200rpm. Then spread the cell on LB agar plate with appropriate antibiotic.",
    },
    {
      subtitle: "Plasmid extraction and sequencing ",
      text: [
        { text: "Pick up a single colony of " },
        { em: "E.Coli " },
        {
          text: "Trelief 5α containing the plasmid from the agar plate and add into LB liquid medium with appropriate antibiotic. Then culture under the condition of 37℃, 250rpm for 12-16h. Then use Sangon’s SanPrep kit (only pACYC plasmids) or Vazyme’s RapidLyse kit for plasmid extraction. The plasmid was then sent to Sangon Biotech for sequencing (Sanger Sequencing).",
        },
      ],
    },
    {
      subtitle: "Colony PCR of bacteria",
      text: "Pick up a single colony on the plate and add into the PCR reaction liquid (RapidTaq) as template. PCR Procedure: 95℃ 10min – (95℃ 30s – 55℃ 15s – 72℃ 60s) 30 cycles – 72℃ 5min.",
    },
  ],
  text7: [
    {
      subtitle: [
        { text: "Culturing " },
        { em: "V. natriegens" },
        { text: " ATCC14048:" },
      ],
      text: [
        { em: "V. natriegens " },
        {
          text: "ATCC14048 grows well in 2216E and LB medium. V2 salts can be added to LB to make LBv2 medium. To make competent cell and perform transformation, only use BHIv2 medium.",
        },
      ],
    },
    {
      subtitle: "Preparation of antibiotic solution",
      text: "For carbenicillin storage solution, dissolve 500mg carbenicillin disodium powder in water and volume to 10mL. For kanamycin storage solution, dissolve 300mg kanamycin sulfate powder in water and volume to 10mL. For chloramphenicol storage solution, dissolve 250mg chloramphenicol powder in anhydrate ethanol and volume to 10mL. All the storage solution was filtered with 0.22μm filter membrane and stored under -20℃. Add the storage solution to the medium under the ratio of 1:1000 when antibiotic is used.",
    },
    {
      subtitle: "Preparation of medium",
      text: "LB medium: dissolve 5g yeast extract, 10g peptone, 10g sodium chloride in water and volume to 1L. To make solid medium, add another 20g agar. Then the medium is sterilized under 121℃ for 20min. To make 2216E or BHI medium, follow the instructions. To make BHIv2 or BHIv2 sucrose medium, sterilize BHI medium, v2 salt solution and sucrose solution separately and mix together after cooling down to room temperature.",
    },
  ],
};
export default text;

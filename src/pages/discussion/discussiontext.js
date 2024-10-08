const text = {
  title: [
    {
      title: "discussion",
    },
  ],
  text1: [
    {
      text: "Considering the researches and the experimental results, we suggest that the addition of the inducer released TtgR to a certain extent, but the de-repression isn’t up to our expectation, which indicates that the sensitivity of biosensor was not strong enough. And we reckon that , resources are more likely to be used for growth than for protein expression, resulting in a faster increase in cell density than the increase in fluorescence intensity. We are trying to investigate the optimal conditions for intracellular protein expression by varying the carbon-to-nitrogen ratio, adjusting oxygen content of the medium and changing the culture temperature. ",
    },
    {
      text: [
        { text: "The low transformation efficiency of " },
        { em: "V. natriegens " },
        {
          text: "is a persistent problem in the experiment.When we increased the final concentration of the added plasmid to 25 µg/µl, the false-positive rate was still close to eighty percent and the number of colonies was low. At the same time, we introduced the plasmid and characterized the transformation using both chemical transformation and electroporation, and ultimately found that electroporation was far more effective than the chemical transformation, even though the article states that the efficiency of both methods was 105-106 Colony-Forming Units (CFU).",
        },
      ],
    },
    {
      text: "In the process of codon optimization，we chose two parameters as the basis of judgment, the ICU and the CC. But this genetic algorithm doesn’t show the convergence of the optimization result, as it should theoretically, with the increasing numbers of iterations. However, if only one parameter is chosen as a factor affecting the fitness, a converged result is obtained when the number of iterations reaches a certain threshold. We tried to optimize the algorithm by, for example, adding the weigh to the values in the step of changing the fitness assigned by comparison with the optimal model, as well as by adjusting the probability of occurrence of the variance to minimize the possibility of the emergence of a locally optimal solution. However, we did not end up with the desired convergence curve and the number of differential bases of the sequence remained within a stable range of values. This means that the algorithm is susceptible to small perturbations, and it is difficult to quantify and judge the impact of the setting of the probability of variation on the overall program.",
    },
    {
      text: [{text:"Overall, the design and successful construction of a high-throughput screening system combining directed evolution with a biosensor allowed efficient screening of CHS mutants. This method significantly improved screening efficiency compared to traditional approaches, facilitating the rapid identification of effective CHS variants.  However, longer mutation validation pathways increase the complexity of mutation library construction. Also, more intermediates may mean less efficient production of the product. This places higher demands on the sensitivity of the sensor. Although progress was made in enzyme expression, there is still a need to balance the metabolic flux within the synthetic pathway. Adjusting the expression levels of different enzymes, avoiding intermediate accumulation, could further enhance production yield. The current TtgR-based biosensor demonstrated limited sensitivity in detecting naringenin, affecting the effectiveness of high-throughput screening. Future work could involve protein engineering to enhance TtgR specificity for naringenin or explore other more sensitive biosensors to improve screening efficiency. "},{em:"V.natriegens "},{text:"showed a tendency to prioritize growth over target protein expression, which may limit product yield. Optimizing medium composition, adjusting induction conditions, or using metabolic engineering to redirect resources towards target product synthesis could further improve production efficiency. This study provided an effective way of improving CHS through an innovative highthroughput screening method combining directed evolution and biosensors. This approach not only enhanced screening efficiency but also showcased the potential of "},{em:"V. natriegens "},{text:"as a chassis organism for industrial production. However, achieving more efficient and scalable production will require further research and optimization in metabolic pathway regulation, biosensor performance, and cultivation strategies."}],
    },
  ],
};
export default text;

export default {
  slug: "sequential-multitask-bandits-transfer",
  category: "Literature Review",
  title: "Paper Study: Representation Transfer for Sequential Multi‑Task Linear Bandits",
  date: "2025‑11‑06",
  excerpt:
    "A formal exploration of sequential multi-task linear bandits, detailing how low-rank representation transfer enables provably efficient learning across correlated tasks.",
  content: `

**Thang Duong, Zhi Wang, Chicheng Zhang**  
Paper link: [https://arxiv.org/abs/2501.13390](https://arxiv.org/abs/2501.13390)  

---

## 1. Problem Setup: Sequential Multi‑Task Linear Bandits

Let $d \\in \\mathbb{N}$ denote the ambient feature dimension. Consider a sequence of $N$ linear bandit tasks indexed by $n = 1, 2, \\dots, N$, with each task containing $\\tau$ rounds $t = 1, \\dots, \\tau$.  

At round $t$ of task $n$, the agent observes a set of $K$ candidate arms, represented by a context (feature) matrix:

$$
\\mathbf{X}_{n,t} = [\\mathbf{x}_{n,t,1}, \\mathbf{x}_{n,t,2}, \\dots, \\mathbf{x}_{n,t,K}]^\\top \\in \\mathbb{R}^{K \\times d},
$$

selects an arm $a_{n,t} \\in [K]$, and observes a stochastic reward:

$$
r_{n,t} = \\mathbf{x}_{n,t,a_{n,t}}^\\top \\boldsymbol{\\theta}_n + \\eta_{n,t}, \\quad \\eta_{n,t} \\sim \\mathcal{N}(0, \\sigma^2),
$$

where $\\boldsymbol{\\theta}_n \\in \\mathbb{R}^d$ is the unknown task-specific parameter vector, and $\\eta_{n,t}$ is sub-Gaussian noise.

### 1.1 Classical Multi-Task Assumptions

Prior work assumes that task parameters $\\{\\boldsymbol{\\theta}_n\\}_{n=1}^N$ satisfy a **diversity condition**: they collectively span a low-dimensional subspace of dimension $m \\ll d$:

$$
\\mathrm{rank}([\\boldsymbol{\\theta}_1, \\dots, \\boldsymbol{\\theta}_N]) = m.
$$

This allows the decomposition:

$$
\\boldsymbol{\\theta}_n = U \\mathbf{w}_n,
$$

where

- $U \\in \\mathbb{R}^{d \\times m}$ is the shared low-rank subspace (representation),
- $\\mathbf{w}_n \\in \\mathbb{R}^m$ is a task-specific coefficient vector.

This *representation learning* enables transfer: once $U$ is estimated, each new task can be learned in the reduced $m$-dimensional space, reducing sample complexity.

### 1.2 Relaxing the Diversity Assumption

In practice, tasks may be correlated or clustered, so that the set $\\{\\boldsymbol{\\theta}_n\\}$ **does not span the full subspace**. The key question addressed in this paper is:

> How can an agent **learn and transfer a shared low-rank representation** without requiring the tasks to be fully diverse?

---

## 2. Algorithmic Contribution

The authors introduce **an online algorithm for sequential multi-task linear bandits** that:

1. **Estimates a shared subspace** $\\hat{U}_n$ incrementally as tasks arrive.  
2. **Learns task-specific parameters** efficiently in the low-dimensional representation.  
3. **Refines the shared subspace** over time using cumulative data.  
4. **Achieves provable regret guarantees** without the full diversity assumption.

Let $\\mathcal{A}_n \\subset \\mathbb{R}^d$ denote the action set (assumed to be an ellipsoid). Then, over $N$ tasks of $\\tau$ rounds each, the algorithm achieves cumulative regret:

$$
R(N,\\tau) = \\tilde{O}\\Big( N m \\sqrt{\\tau} + N^{2/3} \\tau^{2/3} d m^{1/3} + N d^2 + \\tau m d \\Big),
$$

compared to the baseline $\\tilde{O}(N d \\sqrt{\\tau})$ when tasks are learned independently.  

#### Regret Term Interpretation:

- **$N m \\sqrt{\\tau}$**: cost of exploring in the $m$-dimensional shared subspace.  
- **$N^{2/3} \\tau^{2/3} d m^{1/3}$**: cost due to representation learning under correlated tasks.  
- **$N d^2$**: cost of subspace estimation.  
- **$\\tau m d$**: cost of projecting arms onto the low-rank representation for each round.

---

## 3. Detailed Intuition

### 3.1 Low-Dimensional Representation

Instead of learning $d$-dimensional parameters from scratch for each task, the algorithm estimates a shared subspace $U$:

$$
\\hat{U}_n \\approx \\mathrm{argmin}_{U \\in \\mathbb{R}^{d \\times m}} \\sum_{i=1}^{n} \\| \\boldsymbol{\\theta}_i - U U^\\top \\boldsymbol{\\theta}_i \\|^2.
$$

Each new task $\\boldsymbol{\\theta}_{n+1}$ is decomposed as:

$$
\\boldsymbol{\\theta}_{n+1} = \\hat{U}_n \\mathbf{w}_{n+1} + \\boldsymbol{\\epsilon}_{n+1},
$$

where $\\boldsymbol{\\epsilon}_{n+1}$ captures residual components orthogonal to $\\hat{U}_n$.

### 3.2 Sequential Learning Phases

1. **Representation Discovery**: Aggregate data from previous tasks and estimate $\\hat{U}_n$ via PCA-like updates or low-rank regression.  
2. **Task-Specific Learning**: Given a new task, project contexts onto $\\hat{U}_n$, estimate $\\mathbf{w}_{n+1}$ using standard linear bandit algorithms (e.g., OFUL).  
3. **Refinement**: Update $\\hat{U}_{n+1}$ using the newly observed data to improve representation for future tasks.

### 3.3 Intuition Behind No-Diversity Regret Bounds

- The algorithm tolerates correlated tasks because $\\hat{U}_n$ is refined incrementally.  
- Even if initial tasks are clustered, residual exploration ensures eventual coverage of the low-dimensional latent structure.  
- The cumulative regret balances **representation learning cost** versus **benefits of dimensionality reduction**.

---

## 4. Algorithm Pseudo-Code

Input: action sets $A_n$, dimension $d$, latent dimension $m$

Initialize: shared subspace $\\hat{U}_0$ (random or zero)

1. for $n = 1$ to $N$

1.1 for $t = 1$ to $\\tau$:

1.1.1 Observe $\\mathbf{X}_{n,t} \\in \\mathbb{R}^{K \\times d}$

1.1.2 Select arm $a_{n,t}$ via projected linear bandit strategy

1.1.3 Observe reward $r_{n,t}$

1.1.4 Update task-specific estimate $\\hat{\\theta}_n$

1.1.5 Update shared subspace $\\hat{U}_n$ using $\\hat{\\theta}_1, \\dots, \\hat{\\theta}_n$


---

## 5. Assumptions and Limitations

- **Ellipsoid action sets**: Guarantees rely on convex ellipsoidal arms; general action sets may require adaptation.  
- **Synthetic validation**: Experiments use low-rank linear rewards; performance on real-world, noisy, or non-linear tasks remains to be seen.  
- **Computational cost**: Maintaining $U$ over high $d$ and $N$ may be expensive.  
- **Subspace drift**: If the latent subspace evolves over time, algorithm may require re-learning or adaptation.

---

## 6. Practical Implications

- **Personalization**: Online recommendations, adaptive user modeling.  
- **Adaptive experimentation**: Efficient A/B/n testing with related tasks.  
- **Continual learning**: Sequential tasks benefit from cumulative shared structure.  
- **Resource allocation / pricing**: Low-dimensional latent factors accelerate adaptation in evolving markets.

---

## 7. Summary

- **Sequential multi-task linear bandits without diversity** are feasible via incremental representation learning.  
- **Provable regret guarantees** scale favorably with $m \\ll d$.  
- Provides a **practical framework** for transfer learning in sequential decision problems.  
- Opens avenues for: empirical evaluation on real-world datasets, scaling to high dimensions, and extending to non-linear reward models.

> This work demonstrates that **representation-based transfer learning significantly enhances sequential decision-making algorithms**, making them robust to correlated tasks while maintaining provable efficiency.
`
};
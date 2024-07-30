---
layout: post
title: 矩阵乘法
date: 2022-10-06 21:50:00 +0800
---
理解矩阵乘法
[https://www.ruanyifeng.com/blog/2015/09/matrix-multiplication.html]

线性代数：矩阵到底是什么
Linear Algebra: What matrices actually are 
[https://nolaymanleftbehind.wordpress.com/2011/07/10/linear-algebra-what-matrices-actually-are/]

单位矩阵（Identity Matrix），通常表示为 \( I \) 或 \( I_n \)（其中 \( n \) 是矩阵的维度），是一个主对角线上的元素全为1，其余元素全为0的方阵。单位矩阵具有以下几个基本特性：

1. **维度特性**：单位矩阵是一个 \( n \times n \) 的方阵，其中 \( n \) 可以是任意正整数。

2. **主对角线特性**：单位矩阵的主对角线上的元素都是1，即如果 \( I \) 是单位矩阵，那么 \( I_{ii} = 1 \) 对于所有 \( i \)（1 ≤ \( i \) ≤ \( n \)）成立。

3. **非对角线元素特性**：单位矩阵的非对角线元素都是0，即如果 \( I \) 是单位矩阵，那么 \( I_{ij} = 0 \) 对于所有 \( i \neq j \)（1 ≤ \( i, j \) ≤ \( n \)）成立。

4. **乘法特性**：单位矩阵在矩阵乘法中起到与数字1在普通乘法中相同的作用。对于任何 \( n \times n \) 的矩阵 \( A \)，都有 \( AI = IA = A \)。

5. **逆矩阵特性**：任何 \( n \times n \) 的可逆矩阵 \( A \) 与其逆矩阵 \( A^{-1} \) 相乘的结果是单位矩阵，即 \( AA^{-1} = A^{-1}A = I \)。

6. **行列式特性**：单位矩阵的行列式值为1，即 \( \text{det}(I) = 1 \)。

7. **迹特性**：单位矩阵的迹（所有对角线元素的和）等于矩阵的维度，即 \( \text{tr}(I) = n \)。

8. **矩阵指数特性**：单位矩阵的任何非零整数次幂仍然是单位矩阵，即 \( I^k = I \) 对于任何整数 \( k \)。

9. **线性变换特性**：在向量空间中，单位矩阵表示的是恒等变换，即不改变任何向量的值。

单位矩阵在矩阵代数中非常重要，因为它是许多矩阵运算的基础，并且在求解线性方程组、矩阵分解和矩阵函数等领域中扮演关键角色。


DeepMind攻克50年数学难题，史上最快矩阵乘法算法登Nature封面：[https://www.cnbeta.com/articles/tech/1324285.htm](https://www.cnbeta.com/articles/tech/1324285.htm)

《Discovering faster matrix multiplication algorithms with reinforcement learning》[https://www.nature.com/articles/s41586-022-05172-4.pdf](https://www.nature.com/articles/s41586-022-05172-4.pdf)

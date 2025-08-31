const sofas = [];

for (let i = 1; i <= 16; i++) {
  sofas.push({
    id: i,
    title: `Sofa ${i}`,
    description: `A stylish sofa design number ${i} for your living room.`,
    images: [`/images/sofas/sofas (${i}).jpg`],
  });
}

export { sofas };

const ceilings = [];

for (let i = 1; i <= 21; i++) {
  ceilings.push({
    id: i,
    title: `Ceiling ${i}`,
    description: `A stylish ceiling design number ${i} for your home or office.`,
    images: [`/images/ceilings/ceiling (${i}).jpg`],
  });
}

export { ceilings };

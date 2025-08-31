const woodWalls = [];

for (let i = 1; i <= 24; i++) {
  woodWalls.push({
    id: i,
    title: `Wood Wall ${i}`,
    description: `A stylish wood wall design number ${i} for your interior.`,
    images: [`/images/woodwalls/woodwall (${i}).jpg`],
  });
}

export { woodWalls };

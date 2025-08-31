const furnitureData = [];

for (let i = 1; i <= 76; i++) {
  furnitureData.push({
    id: i,
    title: `Door ${i}`,
    description: `A stylish door design number ${i} for your home or office.`,
    images: [`/images/doors/doors (${i}).jpg`],
  });
}

export { furnitureData };

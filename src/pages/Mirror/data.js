const mirror = [];

for (let i = 1; i <= 16; i++) {
  mirror.push({
    id: i,
    title: `Mirror ${i}`,
    description: `A stylish mirror design number ${i} for your living room.`,
    images: [`/images/mirrors/mirror (${i}).jpg`],
  });
}

export { mirror };
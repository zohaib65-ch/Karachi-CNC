const windows = [];

for (let i = 1; i <= 20; i++) {
  windows.push({
    id: i,
    title: `Window ${i}`,
    description: `A stylish window design number ${i} for modern and classic homes.`,
    images: [`/images/windows/window (${i}).jpg`],
  });
}

export { windows };

const boards = [];

for (let i = 1; i <= 21; i++) {
  boards.push({
    id: i,
    title: `Board ${i}`,
    description: `A high-quality board design number ${i} suitable for furniture and interior projects.`,
    images: [`/images/boards/board (${i}).jpg`],
  });
}

export { boards };

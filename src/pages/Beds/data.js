export const beds = [];

for (let i = 1; i <= 27; i++) {
  beds.push({
    id: i,
    title: `Bed ${i}`,
    description: `A stylish bed design number ${i} for your bedroom.`,
    images: [`/images/beds/bed (${i}).jpg`],
  });
}

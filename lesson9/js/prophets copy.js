			
order.textContent = if (prophets[i].order === 1) {
  order = `${prophets[i].order}st`;
} else if (prophets[i].order === 2) {
  order = `${prophets[i].order}nd`;
} else if (prophets[i].order === 3) {
  order = `${prophets[i].order}rd`;
} else {
  order = `${prophets[i].order}th`;
};
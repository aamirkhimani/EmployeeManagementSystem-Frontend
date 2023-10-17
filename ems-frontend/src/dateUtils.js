export function formatDate(dateString) {
    const originalDate = new Date(dateString);
    return originalDate.toISOString().split('T')[0];
  }
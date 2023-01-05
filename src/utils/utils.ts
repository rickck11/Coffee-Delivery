export function formartNumberToCurrency(value: number, format: "BR" | "US") {
  switch (format) {
    case "BR":
      return value
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        .replace(".", ",");
    case "US":
      return value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    default:
      value
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        .replace(".", ",");
  }
}

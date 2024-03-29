const formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
})

export const formatDate = (date: Date) => formatter.format(date)

export const formatMonth = (date: Date) => date.toISOString().slice(0, 7)

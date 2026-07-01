export function PaymentStatus() {
  const copy = {
    title: "Важно.",
    error: "К сожалению, не удалось загрузить данные",
    ok: "ОК",
    details: "Подробнее здесь",
  }

  return (
    <section>
      <h1>{copy.title}</h1>
      <p>{copy.error}</p>
      <button>{copy.ok}</button>
      <a href="/terms">{copy.details}</a>
    </section>
  )
}

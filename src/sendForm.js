export default function(str) {
  const HOST = 'https://apivsk.bexram.online'
  const url = new URL(HOST + '/buisness_protection/send_mail/')

  try {
    return fetch(url.href, {
      method: 'POST',
      body: JSON.stringify({
        title: 'Bank Guarantees; Новый клиент',
        text: str,
        recipient: 'garantiya@vsk.ru'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (e) {
    throw Error('Что - то пошло не так:', e)
  }
}

const API_URL = "http://localhost:4000/api";

export async function getAvailability() {
  return fetch(`${API_URL}/availability`).then((r) => r.json());
}

export async function previewPrice(body) {
  return fetch(`${API_URL}/pricing/preview`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((r) => r.json());
}

export async function createBooking(body) {
  return fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((r) => r.json());
}

export async function getHistory() {
  return fetch(`${API_URL}/bookings`).then((r) => r.json());
}

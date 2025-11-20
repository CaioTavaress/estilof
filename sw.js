self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
  self.skipWaiting(); // ativa imediatamente
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker ativo");
  clients.claim(); // controla páginas sem recarregar
});

// Optional: responder com cache básico só pra evitar erro
self.addEventListener("fetch", (event) => {
  // não bloquear nada — só deixa passar
});
